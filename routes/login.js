var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    if (req.session.user) {
        return res.redirect('/');
    } else {
        res.render('login', { title: 'Login', error: '' });
    }
});

router.post('/', function (req, res, next) {
    const { user, pwd } = req.body;
    if (req.session.user) {
        return res.redirect('/');
    } else {
        if (user == 'admin' && pwd == "123456") {
            req.session.user = user;
            return  res.redirect('/');
        } else {
            res.render('login', { title: 'Login', error: '账号错误' });
        }
    }
});

router.get('/:id', function (req, res, next) {
    res.render('login', { title: 'Login' });
});

module.exports = router;