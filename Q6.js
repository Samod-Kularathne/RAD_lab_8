const express = require('express');
const app = express();
const port = 3000;

// Predefined username and password
const predefinedUsername = 'user';
const predefinedPassword = 'password';

app.get('/login', (req, res) => {
  // Your authentication logic here
});

// Route for performing math operations
app.get('/calculate', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const operation = req.query.operation;

  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      return res.status(400).send('Invalid operation');
  }

  res.send(`Result: ${result}`);
});

// Error handling middleware and server start
app.use((req, res, next) => {
  res.status(404).send('Sorry, the page you are looking for does not exist.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
