require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const students =require('./exam-info.js')

const app = express();

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("full-list.hbs", {students});
});

app.get("/results", (req, res) => {
  res.render(__dirname+"/views/results.hbs", {students});
});


app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);
