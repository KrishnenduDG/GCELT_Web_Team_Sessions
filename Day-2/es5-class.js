// Constructor function
function Person(name) {
  // Property
  this.name = name;
}

// A form of static method,
// can't invoke on object
Person.greet3 = function() {
  console.log("Namaskar ");
}

var person2 = new Person("Person2");

// Person.prototype offers an easy
// reliable way to extend Person
Person.prototype.greet = function() {
  console.log("Hello " + this.name);
}

// Method with params
Person.prototype.greet2 = function(greeting) {
  console.log(greeting + " " + this.name)
}

var person = new Person("Person1");

// Person.prototype can contain
// anything, even literals
Person.prototype.minimumAge = 18;

person.greet();
person.greet2("Hola");

person2.greet();
person2.greet2("Hola");

// person.greet3 <-- error!!

Person.greet3(); // works

console.log(person.minimumAge, person2.minimumAge);

/**
 * Array.prototype.push
 * Person.prototype.greet
 *
 * Array#push
 * Person#greet
 */

