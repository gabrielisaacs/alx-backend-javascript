const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      // Start with the initial text
      res.write('This is the list of our students\n');
      
      // Capture console.log output
      const originalConsoleLog = console.log;
      let output = '';
      console.log = (str) => {
        output += str + '\n';
      };
      
      // Process the database file
      await countStudents(process.argv[2]);
      
      // Restore console.log
      console.log = originalConsoleLog;
      
      // Send the captured output
      res.end(output);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
});

module.exports = app;