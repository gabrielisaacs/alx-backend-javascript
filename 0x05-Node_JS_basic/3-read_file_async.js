const fs = require('fs').promises;

/**
 * Reads the student database file and logs student counts.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} A Promise that resolves when the operation is complete.
 */
function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');

      if (headers.length < 4 || headers[3] !== 'field') {
        throw new Error('Invalid database format');
      }

      const students = lines
        .slice(1)
        .filter((line) => line.trim() !== '')
        .map((line) => line.split(','));

      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        const firstname = student[0];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      // Log the total number of students
      console.log(`Number of students: ${students.length}`);
      // Log the number of students in each field and their names
      Object.entries(fields).forEach(([field, names]) => {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
        );
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
