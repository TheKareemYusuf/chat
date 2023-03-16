const express = require('express');
const bodyParser = require('body-parser');
const commandRouter = require('./routes/commandRoutes');
const menuRouter = require('./routes/menuRoutes');

// const commandController = require('./controllers/commandController');

const app = express();

app.set('view engine', 'ejs');
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./public/chat")


app.get('/', (req, res, next) => {
  res.render('index');
  next()
});

// app.get('/', commandController.getCommand)


app.use("/commands", commandRouter);
app.use("/menu", menuRouter);

app.use(express.static('public'))
module.exports = app