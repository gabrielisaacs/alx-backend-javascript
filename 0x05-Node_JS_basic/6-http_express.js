const express = require('express');
const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

app.use((req, res) => {
  res.status(404).send('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET ' + req.path + '</pre>\n</body>\n</html>');
});

module.exports = app;
