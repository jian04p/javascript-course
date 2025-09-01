// JavaScript Fundamentals Part 2 - Hour 1

////////////////////////////////////
// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

// Function declaration
function logger() {
  console.log("My name is Jonas");
}
logger();
logger();
logger();

////////////////////////////////////
// Functions with Parameters
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

////////////////////////////////////
// Exercise 1: Personal Greeting
function greetStudent(studentName) {
  return `Hello ${studentName}, welcome to JavaScript!`;
}
console.log(greetStudent("Jian"));

////////////////////////////////////
// Exercise 2: Simple Calculator
function addNumbers(a, b) {
  return a + b;
}
function multiplyNumbers(a, b) {
  return a * b;
}
console.log(addNumbers(5, 10));
console.log(multiplyNumbers(3, 7));

////////////////////////////////////
// Function Expressions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const age1 = calcAge(1991);
console.log(age1);

////////////////////////////////////
// Parameters vs Arguments
function calcAge2(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
}
console.log(calcAge2(1991, 2037));
console.log(calcAge2(2005, 2037));

////////////////////////////////////
// Handling Missing Parameters
function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}
console.log(introduce("Jonas", "Schmedtmann", 46));
console.log(introduce("Sarah"));

////////////////////////////////////
// Exercise: Restaurant Bill Calculator
const calculateTip = function (bill, tipPercent) {
  return bill * (tipPercent / 100);
};
const getTotal = function (bill, tip) {
  return bill + tip;
};
const tip = calculateTip(100, 15);
const total = getTotal(100, tip);
console.log(`Tip: $${tip}, Total: $${total}`);

////////////////////////////////////
// Return Values and Scope
function calcAge3(birthYear) {
  return 2037 - birthYear;
}
function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

////////////////////////////////////
// Scope Examples
const globalVar = "I am global";
function testScope() {
  const localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
testScope();
console.log(globalVar);

const userName = "Jonas";
function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`;
  const timestamp = new Date().toLocaleTimeString();
  return `${message} Current time: ${timestamp}`;
}
console.log(createWelcomeMessage(userName));

////////////////////////////////////
// Exercise: Temperature Converter System
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function describeTemperature(temp, unit) {
  if (unit === "C") {
    if (temp > 30) return "Hot";
    if (temp >= 20) return "Warm";
    if (temp >= 10) return "Cool";
    return "Cold";
  } else if (unit === "F") {
    if (temp > 86) return "Hot";
    if (temp >= 68) return "Warm";
    if (temp >= 50) return "Cool";
    return "Cold";
  }
}
console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(86));
console.log(describeTemperature(35, "C"));
console.log(describeTemperature(55, "F"));

////////////////////////////////////
// Coding Challenge #1: Gymnastics
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
  }
}
// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));
// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
