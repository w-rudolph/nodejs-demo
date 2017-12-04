const express = require('express');
const router = express.Router();
const postRouter = require('./post');
const userRouter = require('./user');


/* */
router.use(function(req, res, next){
    console.log(req.session);
    // if(req.session.userId){
    //     return next();
    // }
    next();
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