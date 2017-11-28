var express = require('express');
var router = express.Router();
var whiteList = [
    '/',
    '/login'
];


router.use(function (req, res, next) {
    return next();
    // if (whiteList.indexOf(req.url) > -1) {
    //     next();
    // } else {
    //     console.log('Session:', req.session);
    //     if (req.session.user) {
    //         next();
    //     } else {
    //         return res.redirect('/login');
    //     }
    // }
});

module.exports = router;