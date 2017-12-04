const express = require('express');
const router = express.Router();
const postRouter = require('./post');
const userRouter = require('./user');
const User = require('../../models/User');

/* */
router.get('*', function (req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.redirect('login');
})

/* Admin home page. */
router.get('/', function (req, res, next) {
    res.render('admin/index', { userInfo: req.session.userInfo });
});

/* User page */
router.get('/users', userRouter.list);
router.get('/user/list', userRouter.list);
router.get('/user/add', userRouter.add);

/* Post page. */
router.get('/post/add', postRouter.add);
router.get('/post/delete', postRouter.delete);



module.exports = router;