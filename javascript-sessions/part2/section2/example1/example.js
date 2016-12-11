//Public properties and methods
var Student = function(name, subject){
	//public properties
	this.name = name;
	this.subject = subject;
	//public method
	this.sayHello = function(){
		console.log("Hello, My Name is: "+this.name)
	}
};
var student1 = new Student("Sandeep", "Computers");
console.log(student1.name);
console.log(student1.subject);
console.log(student1.sayHello());