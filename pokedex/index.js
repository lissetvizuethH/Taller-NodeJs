var express = require('express');
const bodyParser = require('body-parser');
const pokemon= require('./routes/pokemon.js');
const moves= require('./routes/moves.js');
const user= require('./routes/user.js');
const notFoundHandler= require('./middleware/notFoundHandler.js')
const corsHandler = require('./middleware/corsHandler.js')
const morgan=require('morgan');
var app = express();

app.use(corsHandler)
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/pokemon", pokemon);
app.use("/moves", moves);
app.use("/user", user);

app.use(notFoundHandler);

app.listen(3001,  () => {

  console.log('Example app listening on port 3001! Server is running!');
});
