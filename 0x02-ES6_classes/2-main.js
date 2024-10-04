import HolbertonCourse from "./2-hbtn_course.js";

// Create a new course object
const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name);
c1.name = "Python 101"; // Changing the name attribute
console.log(c1); // Output the updated object

// Test for type validation
try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

try {
  const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
} catch (err) {
  console.log(err);
}
