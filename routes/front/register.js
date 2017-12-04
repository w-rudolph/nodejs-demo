const User = require('../../models/User');
const md5 = require('md5');

module.exports = {
    index: function (req, res, next) {
        res.render('front/register', { message: '' });
    },
    post: function (req, res, next) {
        const { name, password, repassword } = req.body;
        if (!name) {
            return res.render('front/register', { message: '请输入用户名', name, password, repassword });
        }
        if (!password) {
            return res.render('front/register', { message: '请输入密码', name, password, repassword });
        }
        if (!repassword) {
            return res.render('front/register', { message: '请再次输入密码', name, password, repassword });
        }
        if (password !== repassword) {
            return res.render('front/register', { message: '两次密码不一致', name, password, repassword });
        }

        User.findOne({ name }).then(user => {
            if (user) {
                res.render('front/register', { message: '用户名已存在', name, password, repassword });
                return Promise.reject();
            }
        }).then(() => {
            const user = new User({
                name: name,
                password: md5(password)
            });
            user.save().then(user => {
                res.redirect('/login');
            }).catch(err => {
                console.log(err);
                res.redirect('/register');
            })
        }).catch(() => { });
    },
};