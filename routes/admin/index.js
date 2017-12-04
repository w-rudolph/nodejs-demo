var express = require('express');
var router = express.Router();
var postRouter = require('./post');
var userRouter = require('./user');


/* */
router.get('*', function(req, res, next){
    if(req.session.userId){
        return next();
    }
    res.redirect('/login');
})

/* Admin home page. */
router.get('/', function(req, res, next) {
    res.send('Admin page');
});

/* User page */
router.get('/users', userRouter.list);
router.get('/user/list', userRouter.list);
router.get('/user/add', userRouter.add);

/* Post page. */
router.get('/post/add', postRouter.add);
router.get('/post/delete', postRouter.delete);



module.exports = router;