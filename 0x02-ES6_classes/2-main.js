import HolbertonCourse from "./2-hbtn_course.js";

// Create a new course object
const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // Output: ES6
c1.name = "Python 101"; // Changing the name attribute
console.log(c1); // Output the updated object

// Test for type validation
try {
  c1.name = 12; // This should throw an error
} catch (err) {
  console.log(err); // Output: TypeError: Name must be a string
}

try {
  const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]); // This should throw an error
} catch (err) {
  console.log(err); // Output: TypeError: Length must be a number
}
