/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const person = {
  firstName: "Mohammed",
  lastName: "Yar",
  _gpa: 3.25,

  get fullName() {
    // return "firstName lastName"
    return this.firstName + " " + this.lastName;
  },

  get gpa() {
    // expose the private _gpa safely
    return this._gpa;
  },

  set gpa(val) {
    // validate 0.0–4.0 in the simplest way
    if (typeof val === "number" && val >= 0 && val <= 4) {
      this._gpa = val;
    } else {
      console.warn("Invalid GPA. It must be a number between 0.0 and 4.0.");
    }
  }
};

// Demo outputs:
console.log("Full Name:", person.fullName);
console.log("Current GPA:", person.gpa);
person.gpa = 3.8; // valid
console.log("Updated GPA:", person.gpa);
person.gpa = 4.5; // invalid (will warn)

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courses = {
  "CS101": "Intro to Computer Science",
  "MATH201": "Calculus II",
  "ENG150": "Academic Writing",
  "PHY110": "General Physics"
};

for (const code in courses) {
  console.log(code + " → " + courses[code]);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const greeting = "Hello, world!";
console.log("String:", greeting);
console.log("First char (index 0):", greeting.charAt(0));
console.log("Length:", greeting.length);

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const now = new Date();
const day = now.getDate();        // 1–31
const month = now.getMonth();     // 0–11
const year = now.getFullYear();   // e.g., 2025
console.log("Today → Day:", day, "Month(0–11):", month, "Year:", year);

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const nums = [12, 5, 29, -3, 8, 42, 0, 17, 23, 9];
const minVal = Math.min(...nums);
const maxVal = Math.max(...nums);
console.log("Numbers:", nums);
console.log("Min:", minVal, "Max:", maxVal);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function maxOfArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must be non-empty.");
  }
  // simplest max using reduce
  return arr.reduce((a, b) => (a > b ? a : b));
}

try {
  console.log("Max of [3, 7, 2]:", maxOfArray([3, 7, 2]));
  console.log("Now trying with an empty array to trigger error...");
  console.log("Max of []:", maxOfArray([])); // will throw
} catch (e) {
  console.error("Caught error:", e.message);
} finally {
  console.log("Finally block: cleanup or final message runs regardless.");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
const pattern = /ab/;

const matches = [];
words.forEach((word) => {
  if (pattern.test(word)) {
    console.log(word + " matches!");
    matches.push(word);
  }
});

console.log("Words that match 'ab':", matches);

// End of Advance JavaScript Lab — good luck!
