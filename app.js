const express = require('express');
const db = require('./models');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('HOOOOME');
});

// /users — GET indexes all users
app.get('/users', (req, res) => {
  db.user.findAll().then(users => {
    res.send(users);
  }).catch(err => {
    console.log('🔥');
    console.log(err);
  })
})

// /users/:id — GET shows details of one user
app.get('/users/:id', (req, res) => {
  db.user.findByPk(req.params.id).then(user => {
    res.send(user);
  }).catch(err => {
    console.log('💩');
    console.log(err);
    res.send('error');
  })
})

// Hey LISTEN
app.listen(3000, () => console.log(`☕️ You're listening to the smooth sounds of port 3000 ☕️`));