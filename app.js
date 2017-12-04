const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const redisStore = require('./config/session');
const mongoose = require('mongoose');
const mongoConfig = require('./config/mongodb');
const app = express();

// cookie
app.use(cookieParser());

// session
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: false
    },
    store: redisStore
}));
redisStore.on('connected:', () => {
    console.log('Redis connected!');
}).on('error', err => {
    console.log('Redis connection error: ' + err);
});

// mongoDB
mongoose.connect(mongoConfig, { useMongoClient: true }, err => {
    if (err) {
        console.log('Mongoose connection error: ' + err);
    } else {
        console.log('Mongoose connection open to: ' + mongoConfig);
    }
});
mongoose.Promise = global.Promise;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin/index'));
app.use('/api', require('./routes/api/index'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;