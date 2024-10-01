export default function createReportObject(employeesList) {
  return {
    // The allEmployees key maps to the provided employeesList
    allEmployees: {
      ...employeesList, // Use spread syntax to include all departments and their employees
    },
    // Method to get the number of departments
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; // Returns the count of keys in allEmployees
    },
  };
}
