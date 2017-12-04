const User = require('../../models/User');

module.exports = {
    list: function (req, res, next) {
        User.find().then(users => {
            res.render('admin/users', { users, userInfo: req.session.userInfo });
        }).catch(err => {
            res.send('Error');
        })
    },
    add: function (req, res, next) {
        res.send('User add');
    }
};