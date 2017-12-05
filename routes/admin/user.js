const User = require('../../models/User');

module.exports = {
    list: function (req, res, next) {
        User.find().then(users => {
            console.log(users);
            res.render('admin/users', {
                users: users.map(user => ({ name: user.name, createTime: user.createTime, updateTime: user.updateTime, _id: user._id })),
                userInfo: req.session.userInfo
            });
        }).catch(err => {
            res.send('Error');
        })
    },
    add: function (req, res, next) {
        res.send('User add');
    }
};