var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    user: {
        type: String, 
        required: true,
        ref: 'User'
    },
    content: {
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