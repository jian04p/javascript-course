'use strict';

////////////////////////////////////
// HOUR 2: THE this KEYWORD & ARROW FUNCTIONS

// Object with a method using "this"
const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

person.greet(); // works, "this" points to person

// Assign method to another object
const anotherPerson = {
  name: 'Sarah',
  greet: person.greet,
};
anotherPerson.greet(); // works, "this" points to anotherPerson

// Detached function – this is undefined in strict mode
const greetFunction = person.greet;
try {
  greetFunction(); // this is undefined here
} catch (err) {
  console.log('Detached function error:', err.message);
}

// Arrow function – no its own this
const arrowPerson = {
  name: 'Mike',
  greet: () => {
    console.log(`Hello, I am ${this?.name || 'undefined (arrow function)'}`);
  },
};
arrowPerson.greet(); // logs "undefined (arrow function)"

// Fix: binding "this"
const boundGreet = person.greet.bind(person);
boundGreet(); // works again
