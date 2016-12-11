//private properties and public methods
var Student = function(name, subject){
	//private properties
	var name = name;
	var subject = subject;

	//public method
	this.getName = function(){
		return name;
	}
	this.getSubject = function(){
		return subject;
	}
};
var student1 = new Student("Sandeep", "Computers");
//output undefined, as, name is private
console.log(student1.name);
//output undefined, as, subject is private
console.log(student1.subject);

console.log(student1.getName());
console.log(student1.getSubject());