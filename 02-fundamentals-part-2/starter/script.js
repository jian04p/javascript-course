// JavaScript Fundamentals Part 2 - Hour 2
console.log("=== Hour 2: Arrays and Data Manipulation ===");

// ====================
// Practice 1: Personal Arrays
// ====================
// 1. hobbies with 3 hobbies
// 2. numbers with 5 numbers
// 3. log first and last element
// 4. change second element in hobbies
// 5. array with name, age, boolean

let hobbies = ["drawing", "gaming", "cycling"];
let nums = [5, 12, 23, 44, 99];

console.log("First hobby:", hobbies[0]);
console.log("Last hobby:", hobbies[hobbies.length - 1]);

hobbies[1] = "reading";
console.log("Updated hobbies:", hobbies);

let mixed = ["Jian", 21, true];
console.log("Mixed array:", mixed);

// ====================
// Practice 2: Fruit Basket
// ====================
// Start with ['apple', 'banana']
// push, unshift, pop, includes, indexOf

let fruits = ["apple", "banana"];

fruits.push("orange");
fruits.unshift("grape");
console.log("After push/unshift:", fruits);

fruits.pop();
console.log("After pop:", fruits);

console.log("Includes apple?", fruits.includes("apple"));
console.log("Index of banana:", fruits.indexOf("banana"));

// ====================
// Practice 3: Number Processing
// ====================
// Array: [10, 25, 30, 15, 40]
// 1. double each number with for loop
// 2. log each number with forEach
// 3. calculate sum with for loop
// 4. count numbers > 20

const numbers = [10, 25, 30, 15, 40];

// 1
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log("Doubled numbers:", doubled);

// 2
console.log("Numbers with forEach:");
numbers.forEach(num => console.log(num));

// 3
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of numbers:", sum);

// 4
let countAbove20 = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 20) {
    countAbove20++;
  }
}
console.log("Count > 20:", countAbove20);

// ====================
// Coding Challenge #2: Student Grade Manager
// ====================

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return total / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
