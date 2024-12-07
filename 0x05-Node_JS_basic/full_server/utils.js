import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data.trim().split('\n');
      const studentGroups = {};
      const rows = lines.slice(1); // Skip header row
      rows.forEach((row) => {
        if (row) {
          const [firstname, , , field] = row.split(',');
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          studentGroups[field].push(firstname);
        }
      });
      resolve(studentGroups);
    }
  });
});

export default readDatabase;
