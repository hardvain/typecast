#Introduction to Haskell
Haskell is a pure, lazy functional programming language with strong static typing. The first version of Haskell ("Haskell 1.0") was launched in 1990. It continued to be a language used only by the academia until recently where functional programming constructs have slowly migrated into main stream programming languages and haskell is slowly popping its head out of the crowd.

##What is a functional programming language?

A language is said to be a functional programming language if it satisfies all of the following:

1.	Immutability,
2.	Higher Order functions,
3.	Referential Transparency,
4.	Lazy Evaluation,
5.	Recursion.

In a functional programming language (like Haskell), programs are executed by evaluating expressions in contrast with imperative programming where programs are composed of statements which change the global state when executed. Now what does that mean? Lets take an example. Suppose you go on a trip to India. You find the place very soothing and think that drinking a tea now would be like the icicng on the cake. You have two options. 

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
As you can see that not only the imperative version is bigger, verbose and comparitively difficult to comprehend, the functional version is shorter and easily comprehensible. What we are doing here? We have a list of string, we filter it based on some criteria. The computer knows that when u filter a list, you will get another list (an empty list in the worst case). Then why should I tell the computer to create an empty list and fill the values in it when it already knows that? This si what I meant by telling the computer what to do and not how to do. It seems that surprisingly in most of the cases it is true. i.e. the computer has the intelligence to predict what to do and how to do. Its enough we guide it. This is the essence of functional programming. Now there are few basic rules / guidelines which if we follow, will aid the computer to predict and understand our requirement easily. These are the features upon which functional programming languages operate upon. Haskell supports all of those which we are going to see and infact it enforces we follow those things. This is the reason haskell is called a pure functional programming language. 

## 1. Immutability:
A programming language is useless without the ability to store values in some place and then read it later. We usually call this as variables. Variables usually have a value attached to them pointing to a reference in the memory. Usually we assign values to the variables, pass it to a function and then modify its contents as and when required. Modification of the value can of two types. 1. Type safe and 2. Not type safe. Statically typed languages like C# and Java are type safe and will not allow you to assign a string to a variable of type int. Where as dynamic languages like Ruby, Python, Javascript etc are not type safe and allow you to assign any value of any type to any variable. It seems that both of these mechanisms are not encouraged in functional programming. 

Woah... wait... If I am not allowed to modify the contents of a variable, how am I going to update it? How am I going to convey the result of a calculation to someone fucntion? Am I going to create a new variable every time I need to modify? Wont that increase the memory consumption and hamper the performance? Well it seems there are better ways to achieve all of the above. Lets see that.

In generaly mutability is the process of mutating a variable (changing the value associated with a variable). This is not allowed in haskell and functional programming languages in general. Why so? Lets see an example.

```
public List<String> GetAndPrintDetails(names){
	var details = detailsService.GetDetails(names)
	printingService.PrintDetails(details)
	return details
}
```

The above code is a pseudo code. Consider all the variables to be a mutable one. i.e. their values can be changed any number of times anywhere. It has a method called `GetAndPrintDetails` with a parameter called `names` passed into it. We get the details of all the people by using `DetailsService` and then print the details suing `PrintingService`. After printing we return the details to the caller. This does the task perfectly. But is it not buggy? Well, lets see what are the ways in which this can break.

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

