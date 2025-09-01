// JavaScript Fundamentals Part 2 - Hour 3
console.log("=== OBJECTS & DATA STRUCTURES ===");

// ====================
// Practice 1: Personal Object
// ====================

const book = {
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  pages: 320,
  isRead: false,
};

const playlist = {
  name: "Coding Jams",
  creator: "Jian",
  songs: ["Song 1", "Song 2", "Song 3"],
  genre: "Lo-Fi",
};

// Access properties
console.log(book.title);
console.log(playlist["creator"]);

// Add new properties
book.language = "English";
playlist.yearCreated = 2024;

// Modify existing properties
book.isRead = true;
playlist.genre = "Chill-Hop";

console.log(book);
console.log(playlist);

// ====================
// Practice 2: Calculator Object
// ====================

const calculator = {
  num1: 10,
  num2: 5,
  operator: "+",

  add: function () {
    return this.num1 + this.num2;
  },

  subtract: function () {
    return this.num1 - this.num2;
  },

  multiply: function () {
    return this.num1 * this.num2;
  },

  divide: function () {
    return this.num1 / this.num2;
  },

  calculate: function () {
    if (this.operator === "+") return this.add();
    if (this.operator === "-") return this.subtract();
    if (this.operator === "*") return this.multiply();
    if (this.operator === "/") return this.divide();
    return "Invalid operator";
  },

  getResult: function () {
    return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
  },
};

// Test calculator
console.log(calculator.calculate());
console.log(calculator.getResult());

// ====================
// Coding Challenge #3: User Profile System
// ====================

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  calcAge: function () {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  addFriend: function (name, status = "active") {
    this.friends.push({ name: name, status: status });
    return this.friends.length;
  },

  getActiveFriends: function () {
    return this.friends.filter(friend => friend.status === "active").length;
  },

  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  getSummary: function () {
    return `${this.firstName} ${this.lastName} is a ${this.calcAge()}-year old from ${this.location}.
Status: ${this.isActive ? "Active" : "Inactive"}
Interests: ${this.interests.join(", ")}
Friends: ${this.friends.length} total, ${this.getActiveFriends()} active.`;
  },
};

// Test user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log("\nAfter updates:");
console.log(user.getSummary());
