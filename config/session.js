var session = require('express-session');
var RedisStore = require('connect-redis')(session);

module.exports = session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000,
        secure: false
    },
    store: new RedisStore({
        host: 'localhost',
        port: '6379',
        db: 0,
        ttl: 30 * 60 * 60 * 24
    })
});