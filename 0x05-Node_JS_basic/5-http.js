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

    const database = process.argv[2];
    if (!database) {
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    res.write('This is the list of our students');

    countStudents(database)
      .then(() => {
        res.end();
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
