"use strict";

console.log("=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===");

// --- Section 1: Weather Forecast Challenge ---
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("..." + str);
}

printForecast(data1);
printForecast(data2);

// --- Section 2: Time-Pressured Challenge ---
function analyzeWorkWeek(dailyHours) {
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const maxDay = days[maxDayIndex];
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;
  const isFullTime = totalHours >= 35;

  return { totalHours, averageHours, maxDay, daysWorked, isFullTime };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log("Work week analysis:", analyzeWorkWeek(weeklyHours));

// --- Section 3: Debug Legacy Code ---
function enhancedForecastFunction(temperatures, options = {}) {
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error("Invalid input: temperatures must be a non-empty array");
    return "";
  }
  const { unit = "°C", separator = "...", includeIndex = true } = options;
  let result = "";
  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }
  return separator + result.slice(0, -separator.length);
}

const testData = [15, 18, 22, 19];
console.log("Enhanced function (default):", enhancedForecastFunction(testData));
console.log("Enhanced function (custom):", enhancedForecastFunction(testData, { unit: "°F", separator: " | " }));
