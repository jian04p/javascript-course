// Behind the Scenes Development Hour 1 - Scoping & Hoisting
'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

/*
In this hour, we explore:
1. Execution contexts & call stack
2. Scoping rules
3. Hoisting & TDZ
*/

// ===== Section 1: Execution Contexts & Call Stack =====
console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha(); // Expect: alpha:start → beta → alpha:end

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace(); // Call stack trace
}

outerFunction();

// ===== Section 2: Scoping & Scope Chain =====
const globalVar = 'I am global';

function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(globalVar);
  console.log(functionVar);
}
myFunction();

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out';
  console.log(blockVar, alsoBlockVar);
}
console.log(notBlockScoped); // Works (var leaks)

// Shadowing & scope chain
const name = 'GlobalName';
function a() {
  const name = 'FunctionName';
  function b() {
    console.log('scope chain example:', name);
  }
  b();
}
a();

// ===== Section 3: Hoisting & TDZ =====
console.log(varX); // undefined
var varX = 1;

try {
  console.log(letX); // TDZ
} catch (e) {
  console.error('TDZ error for letX:', e.message);
}
let letX = 2;

console.log(addDecl(2, 3)); // Works
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

const apiUrl = 'https://example.com';
console.log('TDZ fixed:', apiUrl);

// ===== Verification =====
let title = 'Behind the Scenes';
function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label);
  }
  inner();
}
outer();

function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one();
