//How to create an Object?
//Object without a constructor, can not create new instance
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

//Another way, with no constructor

var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//With constructor
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    console.dir(this);
}
//what is "this"?
person();
//what is "this" here?
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

//binding
function callBack(arg1, arg2) {
  console.log(this);
  console.log(this.firstName);
  console.log(this.lastName);
  console.log(this.age);
  console.log(this.eyeColor);
}

callBack(); //Any guess what would be the output??
callBack.bind(person, 1, 2)();
callBack.call(person, 1, 2);//bind object, arguments passed as comma seperated
callBack.apply(person, [1, 2]);//bind object, arguments passed as array

function onClick() {
  var obj = new person("Sally", "Rally", 48, "green");
  callBack.bind(obj)();
}
