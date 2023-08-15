const express = require('express');
const app = express();
const port = 3000;

// Predefined username and password
const predefinedUsername = 'user';
const predefinedPassword = 'password';

app.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (username === predefinedUsername && password === predefinedPassword) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.status(401).send('Authentication failed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
