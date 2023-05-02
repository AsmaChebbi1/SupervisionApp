var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose')
const passport = require('passport')

var indexRouter = require('./routes/index');
var app = express();
const cors = require('cors')
app.use(cors({
    origin: "http://localhost:3000",
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*passport */

app.use(passport.initialize())
require('./security/passport')(passport)

/*Connect to db */
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected to db"))
.catch(err=>console.log("error"))
app.use('/api', indexRouter);
module.exports = app;
