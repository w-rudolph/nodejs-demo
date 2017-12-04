const User = require('../../models/User');
const md5 = require('md5');

module.exports = {
    index: function (req, res, next) {
        if (req.session.userId) {
            return res.redirect('/');
        }
        res.render('front/login', { message: '' });
    },
    post: function (req, res, next) {
        const { name, password } = req.body;
        if (!name) {
            return res.render('front/login', { message: '请输入用户名', name, password });
        }
        if (!password) {
            return res.render('front/login', { message: '请输入密码', name, password });
        }
        const query = { name, password: md5(password) };
        User.findOne(query)
            .then(user => {
                if (!user) {
                    res.render('front/login', { message: '用户名或密码错误', name, password });
                    return Promise.reject();
                }
                req.session.userId = user._id;
                req.session.userInfo = user;
                req.session.save(() => {
                    res.redirect('/');
                });
            }).catch(err => {
                res.redirect('/login');
            })
    },
};