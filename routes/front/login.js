const User = require('../../models/User');
const md5 = require('md5');

module.exports = {
    index: function (req, res, next) {
        if(req.session.userId){
            return res.redirect('/');
        }
        res.render('front/login', { message: '' });
    },
    post: function (req, res, next) {
        const { name, password, repassword } = req.body;
        if (!name) {
            return res.render('front/login', { message: '请输入用户名' });
        }
        if (!password) {
            return res.render('front/login', { message: '请输入密码' });
        }
        const query = { name, password: md5(password) };
        User.findOne(query)
            .then(user => {
                if (!user) {
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