#Factory Pattern

Factory Pattern uses a factory class to constructing objects. Thats it. As simple as that. But why should I use a seperate factory class to construct objects? Well it turns out there is a pretty good reason for it. Lets see what is that.


Lets take a real world example. we all love phones. Smartphones to be precise. Dont we? Lets say that I want a smartphone with solid metallic build, with curved corners, a saphire button in the centre. Looks hot. I am setting up my own garage to create one such phone. Now my friend sees that and he also wants the same. He can get it in two ways. 1. Set up a similar garage in his house and manufacture the phone or he could me one did for him. Fortunately he choses the second. Cool. Now my brother sees my phone he likes all the eatures but doesnt like the metallic build. He wants a leather coat around the phone. But my garage is equipped only to create phones with metallic builds. Hence unfortunately I cant manufacture one such phone for him. Well he creates his own garage and creates his own phone. Behold. It seems my garage turns into a company called as Apple and his garage is formalized as Samsung. Well there goes your factory method pattern. Do you see the reason for such a pattern? Any one can create a object. In this case, my friend could have created his own copy of my phone. But he had to know about how to create each and every part of my phone thus resulting in him knowing many things that he didnt want to. All he wanted was a phone similar to me and when I am there for him to create one, why should he do it from scratch?
Also can you see why my brother created his own factory? Thats because my factory is not equipped to create phones that he likes. All models of iPhone have some common features unique to them. When my friend wants a new model, I can create one for him.  Can you see the analogy?

A factory pattern is

1.	For creating objects with similar properties (All iPhone models will be created in my factory and samsung models will be created in my brother's factory),
2.	To hide the details about construction of an object from the client who uses it (My friend doesnt know how an iPhone is created. All he needs is to use an iPhone and I did for him. This allows me to use any method to construct the phone as long as the end product is the same)
3.	Used for creating objects that have common properties but differ 





