'use strict';

////////////////////////////////////
// HOUR 3: Primitives vs Objects, Copying & Strict Mode

console.log('=== HOUR 3: Primitives vs Objects, Copying & Strict Mode ===');

////////////////////////////////////
// Stack vs Heap: Primitives vs Objects

// Primitives in stack
let age = 30;
let oldAge = age; // Independent copy
age = 31;
console.log('age:', age); // 31
console.log('oldAge:', oldAge); // 30

// Objects in heap
const me = { name: 'Jonas', age: 30 };
const friend = me; // shared reference
friend.age = 27;
console.log('me:', me);
console.log('friend:', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}
const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);
console.log('original:', originalPerson);
console.log('updated:', updatedPerson);
console.log('same object?:', originalPerson === updatedPerson);

////////////////////////////////////
// Shallow Copying
const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...original };
shallowCopy.name = 'Bob';
console.log('original name:', original.name); // 'Alice'
console.log('copy name:', shallowCopy.name); // 'Bob'

// Nested array still shared
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies);
console.log('copy hobbies:', shallowCopy.hobbies);

// Object.assign alternative
const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

////////////////////////////////////
// Deep Copying
const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);
deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');

console.log('original address:', deepOriginal.address);
console.log('copy address:', deepCopy.address);
console.log('original hobbies:', deepOriginal.hobbies);
console.log('copy hobbies:', deepCopy.hobbies);

////////////////////////////////////
// Pitfall: JSON method
const problemObject = {
  name: 'Test',
  date: new Date(),
  method: function () {
    return 'hello';
  },
  undefinedValue: undefined,
};

const brokenCopy = JSON.parse(JSON.stringify(problemObject));
console.log('Broken copy:', brokenCopy);

const workingCopy = structuredClone(problemObject);
console.log('Working copy:', workingCopy);

////////////////////////////////////
// Strict Mode Benefits
function demonstrateThis() {
  console.log('this in strict mode:', this); // undefined
}
demonstrateThis();

const readOnlyObj = Object.freeze({ name: 'Frozen' });
try {
  readOnlyObj.name = 'Changed';
} catch (err) {
  console.log('Strict mode caught error:', err.message);
}

////////////////////////////////////
// Real-World Integration Example
const userManager = {
  users: [],

  addUser: function (userData) {
    const userCopy = structuredClone(userData);
    this.users.push(userCopy);
    return this; // method chaining
  },

  getUsers: function () {
    return [...this.users]; // shallow copy of array
  },
};

const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]); // Still 'John'!
