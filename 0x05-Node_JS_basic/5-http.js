const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const PORT = 1245;

/**
 * Creates an HTTP server.
 * @type {http.Server}
 */
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true).pathname;

  if (reqUrl === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const database = process.argv[2];  // Get the database file path from the command line argument
    if (!database) {
      res.statusCode = 400;  // Bad Request if no database is provided
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    res.write('This is the list of our students\n');
    console.log('This is the list of our students')

    // Attempt to load the students from the database
    countStudents(database)
      .then(() => {
        res.end();  // End response after successfully counting students
      })
      .catch((err) => {
        res.statusCode = 500;  // Internal Server Error if database cannot be loaded
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.statusCode = 404;  // Not Found for invalid endpoints
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
