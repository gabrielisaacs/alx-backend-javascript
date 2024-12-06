const fs = require('fs');

/**
 * Reads the student database file and logs student counts.
 * @param {string} path - The path to the CSV file.
 * @throws Will throw an error if the file cannot be read.
 */
function countStudents(path) {
  try {
    // Read file content synchronously
    const data = fs.readFileSync(path, 'utf-8').trim();
    const lines = data.split('\n');
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
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
