import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath || !fs.existsSync(filePath)) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const studentsByField = {};
    const lines = data.toString().split('\n');
    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');

    if (fieldIndex === -1) {
      reject(new Error('Cannot load the database'));
      return;
    }

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line) {
        const student = line.split(',');
        const field = student[fieldIndex];
        const firstName = student[0];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
    }

    resolve(studentsByField);
  });
});

export default readDatabase;
