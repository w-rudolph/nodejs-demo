var express = require('express');
var router = express.Router();
var whiteList = [
    '/users',
    '/login'
];

router.use(function (req, res, next) {
    console.log('[session]:', req.session )
    if (whiteList.indexOf(req.url)  > -1) {
        next();
    } else{
        res.redirect('/login');
    }
});

module.exports = router;