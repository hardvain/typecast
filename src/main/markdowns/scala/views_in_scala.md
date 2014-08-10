#Views in Scala
All the collections in scala have a lot of common methods that allows you to perform lot of calculations on them. You filter them based on a predicate using `filter` method or extract values from them using `map` method or find the sum of them using `sum` method and many more. The methods that take a collection as a parameter and return another collection which is a transformed form of the initial collection are called as transformers. `map` is a transformer for example. All these methods are strictly evaluated in scala. What is meant by strict evaluation? 

Lets see an example. We have a list of numbers from one to five. We need to add two to each of them and then multiply them by 2. This can be done in many ways.

```
scala> val list1 = List(1,2,3,4,5)
list1: List[Int] = List(1, 2, 3, 4, 5)

scala> val list2 = list1 map (_+2)
list2: List[Int] = List(3, 4, 5, 6, 7)

scala> val list3 = list2 map (_*2)
list3: List[Int] = List(6, 8, 10, 12, 14)

```

Can you see the problem with the above approach? We had to iterate through the same list twice to achieve the resut. This can be done in a single iteration.

```
scala> val list1 = List(1,2,3,4,5)
list1: List[Int] = List(1, 2, 3, 4, 5)

scala> val list2 = list1 map(x => (x+2) * 2)
list2: List[Int] = List(6, 8, 10, 12, 14)
``` 

We got the same in result in just one iteration. This might be a very small optimization considering the small list we have. But when thinking about real time data, this will have a positive effect on the performance. Good. But wait. What are views then? Doing two different operations in a single iteration are called as views? Oh God. No. Lets see.


Do you see any problem with the above approach? How can two different functionalities (in this case adding by 2 and then multiplying by 2) be applied to all elements in a list if they are part of two methods? Do you understand what I say? Let see an example.

```
object Repository{
	def getCustomerPoints={
		val customers:Seq[Customer] 
		// populate customers from DB
		customers map(_.Point)
	}
	
	def saveCustomerPoints(customerPoints:Seq[Int]){
		// save customer points to DB
	}
}

object CustomerService{
	def addPointToCustomer(point:Int){
		val customerPoints = Repository.getCustomerPoints
		val newCustomerPoints = customerPoints map(_+point)
		Repository.saveCustomerPoints(customerPoints)
	}
}
```

In the above example we have two objects. `Repository` deals with reading and writing data to the data base and `CustomerService` does some business logic to the data. Ignore about some signatures like how can `saveCustomerPoints` save the points without a customer id etc. The main thing to notice here is that we are applying two `map` operations to the same sequence(`customers`), same as the previous example but in two different boundaries. This implies that we cant combine both the operations in a single iteration. Unless the data structure you are using is a `Stream` which is lazily evaluated, all others are eagerly (strictly) evaluated. What do we do now? `views` to the rescue.

A collection can be converted to a view by calling the `view` method on it. Calling the `view` method forces scala not to evaluate the operation and to return a proxy object. Once all the operations are done, we can call the `force` method on the view to force evaluation. Lets see an example.

```
object Program extends App{

	def add2(value:Int)={
		println("Adding 2 to "+value)
		value+2
	}

	def multiply2(value:Int)={
		println("Multiplying 2 with "+value)
		value*2
	}	
	println(List(1,2,3,4,5)(add2).map(multiply2))
}
```
The code is self explanatory. See the output below to follow whats happening. 

```
Adding 2 to 1
Adding 2 to 2
Adding 2 to 3
Adding 2 to 4
Adding 2 to 5
Multiplying 2 with 3
Multiplying 2 with 4
Multiplying 2 with 5
Multiplying 2 with 6
Multiplying 2 with 7
List(6, 8, 10, 12, 14)
```

You can see that first function is applied for all elements in the list in the first iteration and then in the second iteration the second function is applied. 

Now doing the same with views, change the last expression alone to `println(List(1,2,3,4,5).view.(add2).map(multiply2).force)`. Now thw output will be 

```
Adding 2 to 1
Multiplying 2 with 3
Adding 2 to 2
Multiplying 2 with 4
Adding 2 to 3
Multiplying 2 with 5
Adding 2 to 4
Multiplying 2 with 6
Adding 2 to 5
Multiplying 2 with 7
List(6, 8, 10, 12, 14)
```
 As you can see that both the functions are applied to a single element in the list and then the same is done for the other elements. This shows that there is only one iteration happening when using views. Note the `view` method is called on the list and `force` is called on the final list to force evaluation. Now lets see how `views` can help in the customer problem we defined above.


```
object Repository{
	def getCustomerPoints: SeqView[Int, Seq[_] ={
		val customers:Seq[Customer] = List(Customer(1), Customer(2))
		customers.view.map(_.Point)
	}

	def saveCustomerPoints(customerPoints:SeqView[Int, Seq[_]]){
		// Save(customerPoints.force)
	}


}

object CustomerService{
	def addPointToCustomer(point:Int){
		val customerPoints = Repository.getCustomerPoints
		val newCustomerPoints: SeqView[Int, Seq[_]] = customerPoints map(_+point)
		Repository.saveCustomerPoints(newCustomerPoints)
	}
}

```

As you can see that instead of returning a seq of customers, we are returning a view by calling the `view` method on the customers object. Notice the return type of the method. It is `SeqView[Int, Seq[_]]`. The first type parameter is to determine the type of the object that is present in the collection and the second type is the container type that will be used to store the values. Notice that even though the `customers` object is declared as a `List`, when used as a `view`, it is type casted to `Seq`. According to scala documentation, this is because applying view logic is involves quite a bit of code and hence  Scala collection libraries provide views mostly only for general collection types, but not for specific implementations (An exception to this are arrays: Applying delayed operations on arrays will again give results with static type Array). 


Views also provide another advantage when used with mutable collections. It provides the ability to filter the values based on indexes and apply some logic to those values alone. 







