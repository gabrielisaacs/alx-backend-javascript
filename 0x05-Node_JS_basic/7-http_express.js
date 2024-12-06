const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

// Set content type to plain text for all routes
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Students route
app.get('/students', async (req, res) => {
  try {
    // Start with the initial text
    let output = 'This is the list of our students\n';

    // Capture console.log output
    const originalConsoleLog = console.log;
    console.log = (str) => {
      output += `${str}\n`;
    };

    // Process the database file
    await countStudents(process.argv[2]);

    // Restore console.log
    console.log = originalConsoleLog;

    // Send the captured output
    res.send(output.trim());
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

module.exports = app;