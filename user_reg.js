const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.send(`
    <h1>Registration Successful</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
