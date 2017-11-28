var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // if (req.session.user) {
    //     return res.redirect('/');
    // } else {
    //     res.render('login', { title: 'Login', error: '' });
    // }
    res.render('login', { title: 'Login', error: '' });
});

router.post('/', function (req, res) {
    const { user, pwd } = req.body;
    
    if (user == 'admin' && pwd == "123456") {
        req.session.user = user;
        return res.redirect('/users');
    } else {
        return res.redirect('/login');
    }
});

router.get('/:id', function (req, res, next) {
    res.render('login', { title: 'Login', error: '' });
});

module.exports = router;