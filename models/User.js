const mongoose = require('mongoose');
const userSchema = require('../schemas/user');

// 模型
module.exports = mongoose.model('User', userSchema);