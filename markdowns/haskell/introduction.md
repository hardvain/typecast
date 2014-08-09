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

## 1. Immutability:
A programming language is useless without the ability to store values in some place and then read it later. We usually call this as variables. 

 Though haskell is far far behind the main stream programming languages like Java, Ruby, C# in terms of external libraries available, the core language is rock solid and have very advanced features that the languages mentioned above does not have. 