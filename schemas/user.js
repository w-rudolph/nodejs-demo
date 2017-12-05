var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createTime: {
        type: Number,
        default: +new Date()
    },
    updateTime: {
        type: Number,
        default: +new Date()
    }
});