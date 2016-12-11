//How to write a JavaScript "hit counter" function?

var counter = 0;

function add() {
  return ++counter;
}

//Anyone can change the counter. which is bad..
//Lets move the var counter inside the method
function add() {
  var counter = 0;
  return ++counter;
}
//That wont work :(

//How about this? An inner function which has got access to its parent variables
//Also 'remember' the environment in which they were created
function add() {
  var counter = 0;
  return function(){
    return ++counter;
  };
}

//And thats called a Closures
//Closures are functions that refer to inde0pendent (free) variables (variables that are used locally,
//but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.

//Final step, self serve...

var add = (function(){
  var counter = 0;
  return function(){
    return ++counter;
  };
})();
add();
