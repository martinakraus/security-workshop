const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// GET request endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a GET request' });
});

// POST request endpoint
app.post('/api/login', (req, res) => {
  const receivedData = req.body;
  res.json({ message: 'This is a POST request', data: receivedData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});