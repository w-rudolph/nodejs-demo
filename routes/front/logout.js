module.exports = {
    index: function (req, res, next) {
        req.session.userId = null;
        req.session.destroy(() => {
            res.redirect('/');
        });
    }
};