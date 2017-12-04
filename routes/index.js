const express = require('express');
const router = express.Router();
const loginRouter = require('./front/login');
const logoutRouter = require('./front/logout');
const registerRouter = require('./front/register');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session.userId);
    res.render('index', { title: 'Express' });
});

/* Login page */
router.get('/login', loginRouter.index);
router.post('/login', loginRouter.post);

/* logout */
router.get('/logout', logoutRouter.index);

/* register page */
router.get('/register', registerRouter.index);
router.post('/register', registerRouter.post);

module.exports = router;