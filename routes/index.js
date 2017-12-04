var express = require('express');
var router = express.Router();
var loginRouter = require('./front/login');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Login page */
router.get('/login', loginRouter.index);
router.post('/login', loginRouter.post);

module.exports = router;