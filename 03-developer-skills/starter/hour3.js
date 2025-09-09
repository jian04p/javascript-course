"use strict";

console.log("=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===");

// ==========================
// Section 1: Array Max Examples
// ==========================
function demonstrateArrayMax(numbers) {
  // Method 1 - Math.max + spread
  const method1 = Math.max(...numbers);

  // Method 2 - For loop
  let method2 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > method2) method2 = numbers[i];
  }

  // Method 3 - Reduce
  const method3 = numbers.reduce((max, current) =>
    current > max ? current : max
  );

  return { method1, method2, method3 };
}

const testNumbers = [3, 7, 2, 9, 1, 5];
const maxResults = demonstrateArrayMax(testNumbers);
console.log("Array max results:", maxResults);

// ==========================
// Section 2: Reverse String Examples
// ==========================
function reverseStringMethods(str) {
  const method1 = str.split("").reverse().join("");
  let method2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    method2 += str[i];
  }
  const method3 = [...str].reverse().join("");
  return { method1, method2, method3 };
}

const reverseResults = reverseStringMethods("hello");
console.log("Reverse string results:", reverseResults);

// ==========================
// Section 3: Array.concat Example
// ==========================
function demonstrateConcat() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  const simple = array1.concat(array2);
  const multiple = array1.concat(array2, array3);

  console.log("Original array1 unchanged:", array1);
  return { simple, multiple };
}

const concatResults = demonstrateConcat();
console.log("Concat results:", concatResults);

// ==========================
// Section 4: Buggy Function Debugging
// ==========================
function calculateAverageScoreFixed(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error("Invalid input: scores must be a non-empty array");
    return 0;
  }

  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] === "number") {
      total += scores[i];
    } else {
      console.warn(`Skipping non-number at index ${i}:`, scores[i]);
    }
  }

  return total / scores.length;
}

const testScores = [85, 92, 78, 96, 88];
console.log("Fixed average score:", calculateAverageScoreFixed(testScores));

// ==========================
// Section 5: Console Debugging
// ==========================
function demonstrateConsoleDebugging(data) {
  console.group("Debugging Session");
  console.log("Input data:", data);
  if (typeof data !== "object") {
    console.warn("Warning: Expected object, got", typeof data);
  }
  console.table(data);
  console.groupEnd();
  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

demonstrateConsoleDebugging([1, 2, 3]);
demonstrateConsoleDebugging({ name: "John", age: 30 });

// ==========================
// Section 6: Debugger Statement Example
// ==========================
function stepThroughDebugging(numbers) {
  debugger; // Pause in browser dev tools
  let sum = 0, count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    console.log(`Processing index ${i}: value = ${currentNumber}`);
    if (typeof currentNumber === "number") {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }
  const average = count > 0 ? sum / count : 0;
  console.log("Final results:", { sum, count, average });
  return average;
}

stepThroughDebugging([10, 20, "error", 30, null, 40]);
