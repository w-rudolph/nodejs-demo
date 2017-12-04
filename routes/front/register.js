const User = require('../../models/User');
const md5 = require('md5');

module.exports = {
    index: function (req, res, next) {
        res.render('front/register', { title: 'register', error: '' });
    },
    post: function (req, res, next) {
        const { name, password, repassword } = req.body;
        if (!name) {
            return res.json({ code: 0, error: 1, message: '请输入用户名' })
        }
        if (!password) {
            return res.json({ code: 0, error: 1, message: '请输入密码' })
        }
        if (!repassword) {
            return res.json({ code: 0, error: 1, message: '请再次输入密码' })
        }
        if (password !== repassword) {
            return res.json({ code: 0, error: 1, message: '两次密码不一致' })
        }

        User.findOne({ name }).then(user => {
            console.log(user);
            if (user) {
                res.json({ code: 0, error: 1, message: '用户名已存在' });
                return Promise.reject();
            }
        }).then(() => {
            const user = new User({
                name: name,
                password: md5(password),
                updateTime: +new Date()
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