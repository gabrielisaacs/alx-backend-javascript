const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  let output = 'This is the list of our students\n';

  try {
    // Capture console.log output
    const originalConsoleLog = console.log;
    const logs = [];
    console.log = (str) => {
      logs.push(str);
    };

    // Process the database file
    await countStudents(databasePath);

    // Restore console.log
    console.log = originalConsoleLog;

    // Combine output with logs
    output += logs.join('\n');
    res.status(200).send(output);
  } catch (error) {
    // In case of error, still send the initial text followed by the error message
    output += error.message;
    res.status(200).send(output);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

module.exports = app;
