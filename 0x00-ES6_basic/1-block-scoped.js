export default function taskBlock(trueOrFalse) {
  // Initialize task and task2 variables with block scope
  let task = false; // Default value for task
  let task2 = true; // Default value for task2

  // Check the condition passed to the function
  if (trueOrFalse) {
    // Create block-scoped variables to prevent overwriting the outer variables
    let task = true; // Block-scoped variable for task
    let task2 = false; // Block-scoped variable for task2
  }

  // Return the outer variables
  return [task, task2]; // This will return the original task and task2 values
}
