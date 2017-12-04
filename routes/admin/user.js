module.exports = {
    list: function (req, res, next) {
        res.send('User list');
    },
    add: function (req, res, next) {
        res.send('User add');
    }
};