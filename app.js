const express = require('express');
const todoController = require('./contollers/todoController');
const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(PORT);
console.log('You are listening to port 3000');