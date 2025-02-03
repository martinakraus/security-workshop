const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

 app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'POST',
  allowedHeaders: 'Content-Type, X-Custom-Header', 
  credentials: true
 }));

const port = 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET request endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a GET request' });
});

// POST request endpoint
app.post('/api/login', (req, res) => {
  const receivedData = req.body;
  res.json({ message: 'This is a POST request', data: receivedData });
});

app.put('/api/login', (req, res) => {
  const receivedData = req.body;
  res.json({ message: 'This is a PUT request', data: receivedData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});