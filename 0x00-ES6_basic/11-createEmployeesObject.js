export default function createEmployeesObject(departmentName, employees) {
  // Create and return an object with the department name as the key
  // and the employees array as its value.
  return {
    [departmentName]: employees, // Use computed property names to set the department name as the key
  };
}
