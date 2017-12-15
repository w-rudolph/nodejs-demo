const mongoose = require('mongoose');
const postSchema = require('../schemas/post');

// 模型
module.exports = mongoose.model('Post', postSchema);