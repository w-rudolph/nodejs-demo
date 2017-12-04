const session = require('express-session');
const RedisStore = require('connect-redis')(session);
module.exports = new RedisStore({
    host: 'localhost',
    port: '6379',
    db: 0,
    ttl: 30 * 60 * 60 * 24
});