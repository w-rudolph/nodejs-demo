var index = require('./index');
var users = require('./users');
var login = require('./login');

module.exports = {
    '/': index,
    '/users': users,
    '/login': login
};