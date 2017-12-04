const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const store = new RedisStore({
    host: 'localhost',
    port: '6379',
    db: 0,
    ttl: 30 * 60 * 60 * 24
});
module.exports = {
    run() {
        return session({
            secret: 'secret key',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 24 * 60 * 60 * 1000,
                secure: false
            },
            store: store
        })
    },
    redisClient: store.client
};