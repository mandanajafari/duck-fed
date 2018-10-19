const express = require('express');
const path = require('path');
const app = express();

const foodRouter = require('./server/routers/food');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/food', foodRouter);


app.listen(process.env.PORT || 8080);