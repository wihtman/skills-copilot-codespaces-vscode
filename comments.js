// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Run the server
// $ node comments.js
// Server is running on http://localhost:3000
// Open a browser and go to http://localhost:300