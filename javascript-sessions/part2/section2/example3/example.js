// static property
var Student = function(name, subject){
	this.name = name;
	this.subject = subject;
};
//declaring static property 
Student.collegeName = "VIT University";

var student1 = new Student("Sandeep", "Computers");

//accessing static property 
console.log("Student.collegeName: "+ Student.collegeName);
console.log("student1.constructor.collegeName: "+ student1.constructor.collegeName);
