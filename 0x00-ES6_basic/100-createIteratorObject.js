export default function createIteratorObject(report) {
  // Get all the employees from the report object
  const employees = Object.values(report.allEmployees).flat();

  // Return an iterator for the employees array
  return employees[Symbol.iterator]();
}
