Every programming language will have a means to assign some value to a variable. We use this to store important data for our program to run. Different paradigms of programming languages allow you to assign values differently. In C# you can create an int by any one of the following:

```
int age = 25;
// or

var age = 25;
```
C# has some type inference features and hence it is able to find the type of the variable.

In scala you can use `var` or `val` to assign a value to a variable. (Well variable is not a correct term here). Both of the following are valid.

```
var age = 25
// or
val age = 25
```

The main difference between both of them is that the first one is a mutable variable whereas the second one is immutable. `val` is similar to `final` in java. Once initialized, it can never be changed. Scala encourages you to use `val` where ever possible. Scala compiler will scold you when you try to reassign a `val`.

```
val age = 25
age = 26
// Causes a compilation error. "error : reassignment to a val"
```
In scala you mention the type of the variable after the name or you need not mention the type and allow scala to infer it. Both of the follwing are valid expressions.

```
val age = 25

val age : Int = 25
```
If you dont specify an initial value to a variable then the compiler cannot infer its type. In that case you need to explicitly tell the type of the variable like this.

```
val age : Int

```
The above line of code can live only inside an abstract class or a trait. We will see about both of them later.


It is good to explicity annotate your variables when they are exposed as a part of an API so that you can annotate with the most general compatible type. For example `List` class inherits most of its methods from `Seq` class. If only the methods from `Seq` are going to be used, we can mention the type as `Seq` which will give an idea of the methods used on that variable to whoever consumes the API. 

There is one nice catch here.The `var` and `val` keywords only specify whether the reference can be changed to refer to a different object (var) or not (val). They don’t specify whether or not the object they reference is mutable. `val` will restrict the reference of the value from changing once it is initialized. But it will not tell anything if the contents of the reference is changed. What is that? It is known as modifying the state of an immutable object.

```
val names = Array("Dhoni", "Sachin")

//the below line will cause an error because we are reassigning names to a different array
names = Array("Dhoni")

// but the below line is valid
names(0) = "Ganguly"

println(names(0)) // prints Ganguly
```

As we saw, the variable `names` is bound to an array reference. Lets consider the array as a box that can hold something. When using `val`, this box cant be changed. But the contents of the box can be changed. Thats why we were able to modify the first value in the array. 

The `names` variable we saw above was an immutable one. That is a single value holding a reference to some box. In this case the `Array`. But we saw that the `Array` itself was mutable. i.e we were able to change the first element in it. In the introduction we saw that immutability helps in concurrent programming where the variable's value can never be changed. But we have changed the first value of the array. Wont it cause a problem when used in multicore programs? Yes. It will. So whats the solution? Use `List`. List by itself is an immutable data structure. What is that? When you add a new element or modify an element in a list, you will get a new list. The original list can never be modified. Lets see an example.

```
val names = List("Dhoni", "Sachin")

// use updated method to update a list
val newNames = names.updated(0,"Ganguly")

println(names) // prints List("Dhoni", "Sachin")
println(newNames) // prints List("Ganguly", "Sachin")
```

>With all these benefits of immutability, why do we need mutable `vars`? Well there are some cases where `vars` which are mutable increse the performace. It is adviced that unless you are sure about the performance gain, dont use `var`.

###Constructor parameters
Both `val` and `var` can be used for defining constructor parameters for a class. `vars` will get both getters and setters generated whereas `vals` will get only getters generated. Woah. Wait. Generated? How can getter and setter be generated? Well yeah. Scala does that for you when you use something called as `case classes`. We will see more about constructors and constructor parameters later.

###Method parameters
All the variables passed as parameters in a method are always immutable. They can never be changed.

```
def square(number : Int)={
	number = 5 // Causes a compilation error. "error: reassignment to a val"
}
```
###Fields 
Fields are variables that belong to an object. The fields are accessible from inside every method in the object. Fields can also be accessible outside the object, depending on what access modifiers the field is declared with. Fields can be both val's and var's.

###Local Variables
Local variables are variables declared inside a method. Local variables are only accessible from inside the method, but the objects you create may escape the method if you return them from the method. Local variables can be both var's and val's.
