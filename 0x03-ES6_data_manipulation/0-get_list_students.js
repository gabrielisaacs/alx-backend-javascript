/**
 * Returns a list of student objects.
 * @returns {Array<Object>} Array of student objects with id, firstName, and location properties.
 */
function getListStudents() {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return students;
}

export default getListStudents;
