export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to store employee names
  const employeeNames = [];
  
  // Iterate through the reportWithIterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee to the array
  }

  // Join the employee names with ' | ' and return the resulting string
  return employeeNames.join(' | ');
}
