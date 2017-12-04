var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: String,
    password: String,
    createTime: {
        type: Number,
        default: +new Date()
    },
    updateTime: Number
});