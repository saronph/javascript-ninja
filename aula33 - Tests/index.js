'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

var users = [
  {
    name: 'João',
    age: 30,
  },
  {
    name: 'Maria',
    age: 20,
  },
  {
    name: 'Saron',
    age: 18,
  },
];

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send({ message: 'Home' });
});

app.get('/user/:username', function (req, res) {
  var username = req.params.username;
  var hasUser = users.some(function (user) {
    return user.name === username;
  });

  console.log(users);

  if (hasUser) {
    return res.json(
      users.filter(function (user) {
        return user.name === username;
      })
    );
  }
  res.status(404).json({ error: 'Usuário não encontrado' });
});

app.post('/user', function (req, res) {
  var user = JSON.parse(Object.keys(req.body)[0]);
  users = [user, ...users];
  console.log(users);
  res.json(user);
});

app.listen(3000);
