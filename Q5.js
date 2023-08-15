const express = require('express');
const app = express();
const port = 3000;

// Predefined username and password
const predefinedUsername = 'user';
const predefinedPassword = 'password';

app.get('/login', (req, res) => {
  // Your authentication logic here
});

// Error handling middleware for 404 (Not Found) routes
app.use((req, res, next) => {
  res.status(404).send('Sorry, the page you are looking for does not exist.');
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
