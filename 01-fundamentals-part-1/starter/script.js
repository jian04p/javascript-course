// JavaScript Fundamentals - Hour 4

////////////////////////////////////
// Type Conversion vs. Coercion
console.log("=== TYPE CONVERSION VS COERCION ===");

console.log(Number("1991"), "1991");
console.log(Number("Jonas")); // NaN
console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old"); // 'I am 23 years old'
console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); // '23103'
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);

console.log(2 + 3 + 4 + "5"); // '95'
console.log("10" - "4" - "3" - 2 + "5"); // '15'

////////////////////////////////////
// Truthy and Falsy Values
console.log("=== TRUTHY AND FALSY VALUES ===");

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

////////////////////////////////////
// Equality Operators: == vs ===
console.log("=== EQUALITY OPERATORS ===");

const age = "18";
if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

////////////////////////////////////
// Logical Operators
console.log("=== LOGICAL OPERATORS ===");

const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

////////////////////////////////////
// The Ternary Operator
console.log("=== TERNARY OPERATOR ===");

const myAge = 23;
const drink = myAge >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

console.log(`I like to drink ${myAge >= 18 ? "wine 🍷" : "water 💧"}`);

////////////////////////////////////
// Coding Challenge #3 - Tip Calculator

console.log("=== TIP CALCULATOR ===");

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const bill2 = 40;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);

const bill3 = 430;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`);