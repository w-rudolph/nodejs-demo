module.exports = {
    index: function(req, res, next){
        res.render('front/login', {title: 'Login', error: ''});
    },
    post: function(req, res, next){
        res.redirect('login');
    },
};