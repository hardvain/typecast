#Introduction to Scala
Scala is a hybrid programming language that supports both functional and object oriented style of programming. Scala is a short form for scalable language. It is a statically typed programming language that is impure in its support for functional programming. Scala programs runs on the JVM and hence compiles to the same bytecode which java compiles to. This makes scala code interoperable with java. Lets see what makes scala an object oriented and functional programming language and features unique to scala.

##What is an object oriented language?
A language is said to an object oriented language if it manily satisfies all of the following:

1.	Encapsulation,
2.	Abstraction,
3.	Inheritance and 
4.	Polymorphism.

I am not going to go into details of the above because they are pretty much supported  by all mainstream languages. Scala is no exception. Infact it has better support for them compared to other languages. 

##What is a functional programming language?

A language is said to be a functional programming language if it mainly satisfies all of the following:

1.	Immutability,
2.	First Class Functions,
3.	Referential Transparency,
4.	Purity,
5.	Lazy Evaluation and
6.	Recursion.

In a functional programming language, programs are executed by evaluating expressions in contrast with imperative programming where programs are composed of statements which change the global state when executed. Scala supports both the above two methods, but encourages you to use functional style. Every statement is an expression in scala, but you can still write imperative code which you need to avoid. Now what does that mean? Lets take an example. Suppose you go on a trip to India. You find the place very soothing and think that drinking a tea now would be like the icicng on the cake. You have two options. 

1. Go to your kitchen, take all the necessary utensils and ingredients, prepare the tea, heat it and enjoy it by drinking, or you can
2. Go to a shop nearby and ask the person to prepare you a tea and you can enjoy.

The second style is called as functional programming whereas the first style is called imperative programming. Functional programming provides you an higher level of abstraction where you can tell the computer what it needs to do and then the computer finishes the task by itself. In an imperative programming style, we will tell the computer how to do, and the so called super intelligent computer follows your instructions as said. As you can see here, functional programming tries to use the intelligence of a computer where ever possible and thus avoids many mistakes which our human minds make. Having said this, functional programming is not where you enter a text like `I need an admin system with logging capabilities for a large scale IT organization` and the computer automagically creates an application, deploys itself in a server and finally present you with an URL pointing the application. No. It is not like that. Lets see what I meant by telling computer what to do vs telling it how to do. 

Consider a scenario where we have an array of names. Our job is to filter the names starting with alphabet `D`. No particular language syntax is followed below. Consider it as a pseudo code. 

*	Imperative style:
	
	```
	var names = ["Sachin", "Dravid","Ganguly","Dhoni", "Dhawan","Kohli","Yuvraj"]
	var namesStartingInD = []
	foreach(var name in names){
		if(name.StartsWith('D')){
			namesStartingInD.add(name)
		}
	}
	println(namesStartingInD)
	```
*	Functional style:

	```
	var names = ["Sachin", "Dravid","Ganguly","Dhoni", "Dhawan","Kohli","Yuvraj"]
	var namesStartingInD = names.filter(_.startsWith('D'))
	println(namesStartingInD)
	```
	
As you can see that not only the imperative version is bigger, verbose and comparitively difficult to comprehend, the functional version is shorter and easily comprehensible. What we are doing here? We have a list of string, we filter it based on some criteria. The computer knows that when u filter a list, you will get another list (an empty list in the worst case). Then why should I tell the computer to create an empty list and fill the values in it when it already knows that? This si what I meant by telling the computer what to do and not how to do. It seems that surprisingly in most of the cases it is true. i.e. the computer has the intelligence to predict what to do and how to do. Its enough we guide it. This is the essence of functional programming. In the functional example the `_` is bound to every name in the `names` array as it is iterated. 

Now there are few basic rules / guidelines which if we follow, will aid the computer to predict and understand our requirement easily. These are the features upon which functional programming languages operate upon. 

## 1. Immutability
A programming language is useless without the ability to store values in some place and then read it later. We usually call this as variables. Variables usually have a value attached to them pointing to a reference in the memory. Usually we assign values to the variables, pass it to a function and then modify its contents as and when required. Modification of the value can of two types. 1. Type safe and 2. Not type safe. Statically typed languages like C# and Java are type safe and will not allow you to assign a string to a variable of type int. Where as dynamic languages like Ruby, Python, Javascript etc are not type safe and allow you to assign any value of any type to any variable. It seems that both of these mechanisms are not encouraged in functional programming. 

Woah... wait... If I am not allowed to modify the contents of a variable, how am I going to update it? How am I going to convey the result of a calculation to someone fucntion? Am I going to create a new variable every time I need to modify? Wont that increase the memory consumption and hamper the performance? Well it seems there are better ways to achieve all of the above. Lets see that.

In generaly mutability is the process of mutating a variable (changing the value associated with a variable). This is not considered good in functional programming world. Why so? Lets see an example.

```
public List<String> GetAndPrintDetails(names){
	var details = detailsService.GetDetails(names)
	printingService.PrintDetails(details)
	return details
}
```

The above code is a pseudo code. Consider all the variables to be mutable. i.e. their values can be changed any number of times anywhere. It has a method called `GetAndPrintDetails` with a parameter called `names` passed into it. We get the details of all the people by using `DetailsService` and then print the details suing `PrintingService`. After printing we return the details to the caller. This does the task perfectly. But is it not buggy? Well, lets see what are the ways in which this can break.

1.	We pass the details variable to `PrintingService`. Ideally it is supposed to only print the data and do nothing. What if the `PrintingService` by mistake removes some of the details? Can we guatantee that it wont do so? Yes if it is our code, No if it is from a library. Even if it is our code, we need to make sure that `PrintingService` works propery in order to make sure our method works properly. 
2.	Also during testing of the code, we need to test the `PrintingService` correctly and then also we need to make sure that all method calls from our method are tested. 


Both of the above problems can be avoided if the variables are immutable which means that once a value is associated with a variable, it can never be changed. The `PrintingService` can not change the value of `details`. This eliminates the first problem. Also for testing it is enough if we test the final result of a method because we can be sure that none of the internal calls will have changed our variable. Well it should not be called as `variable` because its value cant be changed, but I have stuck to that for the understanding of those coming from imperative background. 

###Persistent Data Structures

Ok. This solves two good problems. But what about the memory problem? Well it may be small overhead to create copies of individual variables, but what about lists? What about a list containing a million records? If I am to modify even one of those, should I create a copy of it? That would be a huge memory problem. Isnt it? Well ya. Yes it is a problem. But this problem has been tackled by the usage of persistent data structures. Woah. Wait. What is a persistent Data Structure?

Let us say that we have an array of integers. 

	var integerArray = [1,2,3,4]

Lets assume that this is implemented as a linked list in memory. The head will be `1` and tail will be `4`. Its representation will be `1 => 2 => 3 => 4`. Now we have to change the first value to `0`. So the required representation will be `0 => 2 => 3 => 4`. As you can see that apart from one value the rest are the same. The programming language intelligently uses the same memory for the common values and just point the head to a different value. This is how persistent data structures work. Well I agree that there is still some mmeory overhead compared to in place mutation, but the actualy overhead is greatly reduced by using this method.

### Use of immutability in Concurrent Programming
It is also seems that using immutable values helps a great deal in concurrent programming. Anyone who has done concurrent programming in Java or C# will know about the pain of avoiding deadlocks and corruption of values. We have to make sure that one thread doesnt modify a variable when another thread is using it. This was accomplished using locks. But recently programming languages have improved a lot in their support for concurrent programming but still it leaves us wanted for more in some cases. But when a variable is immutable, we can be 100% sure that it will never be changed and hence there is no need of locks and no memory corruption will be possible. 

## 2. First Class Functions
A language is said to have first class functions if it treats functions as first class citizens. WTH was that? Well, it means that you can store a function in a variable and pass it around like a normal variable containing an int or a string. You can pass it to functions, return it from a function, you can have a list of functions. This method of programming enables programming with a higher level of abstraction because you have the ability to pass functions (code logic) which are no longer tied to instances of a class as in object oriented world. You can also create anonymous functions which small utility functions where giving them a name doesnt make much sense. First class functions enables the concept of higher order functions which are functions that takes functions as parameters. Higher-order functions are very useful for refactoring code and reduce the amount of repetition. We will see more about higher order functions when we see about functions in scala.


##	3. Referential Transparency
In a functional programming language every line of code is an expression. Not a statement. A statement does something but need not return anything. But an expression should always return a value. This is in sync with the mathematical concept of expressions. A referentially transparent function should always return the same result for a particular value of an input. i.e. At any time, for a particule input, the replacement of the function call should not affect the execution of a program. Lets see an example.


	public int square(int number){
		return number * number
	}

The above function is referentially transparent as for a value of `number` it is always going to return its square. For example, we can replace `square(4)` with `16` and be assured that the program will run correctly. Function calls can be memoized if they are referentially transparent.

## 4. Purity
Some language allow functions to  interact with external components apart from returning values. Such languages are called as impure languages. What is meant by interacting with external components? Well, printing to screen, writing to file etc are called cas side effects. They are used to convey something to the outside world. This is called as impurity. Scala is an impure functional language in sense that it allows you to interact with the external world from anywhere in the code. But it is encouraged to restrict your interactions to a smaller boundary of code.

## 5. Lazy Evaluation
Since pure computations are referentially transparent they can be performed at any time and still yield the same result. This makes it possible to defer the computation of values until they are needed, that is, to compute them lazily. Lazy evaluation avoids unnecessary computations and allows, for example, infinite data structures to be defined and used. LINQ in C# uses lazy evaluation techniques. `[1..]` is an infinite list in haskell. But wont it cause stack overflow? Well, no. Because it will not be evaluated untill some other function uses it. `take 5 [1..]` will result in `[1,2,3,4,5]`. `take` is a function that takes two paramters. A number and an list and results in the number of items taken from the top of that list. 

## 6. Recursion
If loops are not allowed in functional programming languages because loops function based on mutating of variables, then how are we going to do some repeated logic on some complex data structures? The answer is recursion. Recursion is the concpet of a function calling itself. Recursion in languages without tail call optimization usually results in stack overflow for large sets of data. Scala is not tail call optimized because of the constraints posed by JVM.


## Some scala niceties

###Type Inference
One of the biggest problems citied against statically typed programming languages is that they are verbose. Well, tht was true in a way for Java and to some extent C#. But scala relieves you of lot of such pain by infering the types where ever possible. Lets see an example.

```
// a hashmap in Java
HashMap<string,int> names = new HashMap<string,int>()

// a hashmap in scala
val names = HashMap<String,Int>()
```

You can see that scala is able to infer the type of the variable from the type of the right hand side of the expression. This reduces some typing of types for us. Lets see another example.

```
def square(number : Int)={
	number * number
}
```

Dont worry if the above code doesnt make sense. That is a method in scala. The name of the method is `square` and it takes a parameter `number` of type `Int`. It squares the number. But you can see that there is no return type specified for the method. It seems that in scala, the type of the last expression is the return type of the method. Scala's type inference comes into play here. I accept that scala's type inference is not as good as Haskell but scala doesnt use the `Hindley-Milner` algorithm that haskell uses. But still it tries to infer the types wherever possible. The same function in Haskell would be like:

```
square n = n * n
```


###Semicolon Inference

You need not type semicolon at the end of every expression in scala. It is optional. Semicolon is required only when there are multiple expressions in a single line.

```
// no semicolon required at the end
val names = List("Dhoni", "Sachin")

// semicolon required to separate the two expressions. Again note that there is no semicolon at the end of the line
val names = List("Dhoni","Sachin") ; val age = 25

```

###Optional return statement
In scala, the return statement at the end of every method is optional. Since every line of code is an expression in scala, the last line is the reutrn value and its type is the return type of the method. In the `square` example we saw earlier, the expression `number * number` is going to return an `Int` and it is the return value of the function. No explicit `return` keyword is required. There is one catch though. If you specify an explicit return statement, then you need to specify the return type of the method explicitly. The same `square` method can be written as:

```
// The second Int is the return type of the method
def square(number : Int): Int = {
	return number * number
}
```

You need to be careful while using the `=` in a method definition. If you dont use the `=`, the method will be considered to return `Unit` which is equivalent to `void` in C# and java. The last expression of the method will still be evaluated but will not be considered as the return value of the method. 

```
// The return value is considered to be Unit and hence then result of this method can not be used anywhere.
def square(number : Int){
	number * number
}

val squaredValue = square(5) // squaredValue is not equal to 25 in this case. It is equal to Unit
```

















