const Post = require('../../models/Post');

module.exports = {
    list: function (req, res, next) {

        Post.find({ user: req.session.userId }).populate('user', '_id name')
            .then(function (posts) {
                res.render('admin/post', { posts, userInfo: req.session.userInfo });
            }).catch(function (err) {
                console.log(err);
            });
    },
    add: function (req, res, next) {
        const id = req.query.id;
        console.log(id);
        if (!id) {
            return res.render('admin/postAdd', { _id: '', title: '', content: '', summary: '', userInfo: req.session.userInfo });
        }
        Post.findOne({ _id: id }).populate('user', '_id name')
            .then(function (post) {
                if (post._id) {
                    if (post.user && post.user._id == req.session.userId) {
                        res.render('admin/postAdd', { post });
                    } else {
                        res.render('error', { message: '你没有权限编辑该文章' });
                    }
                } else {
                    res.render('error', { message: '文章不存在' });
                }
            }).catch(function (err) {
                
                res.render('error', { message: 'error' });
            });
    },
    update: function (req, res, next) {
        const { title, summary, content, id } = req.body;
        if (!title) {
            return res.json({ message: '请填写标题', error: 1 });
        }
        if (summary.length < 20) {
            return res.json({ message: '摘要至少20个字', error: 1 });
        }
        if (content.length < 20) {
            return res.json({ message: '内容至少20个字', error: 1 });
        }
        if (!id) {
            const post = new Post({ title, summary, content, user: req.session.userId });
            post.save().then(function () {
                return res.json({ message: '添加成功', error: 0 });
            }).catch(function (err) {
                return res.json(err)
            });
        } else {
            Post.update({ _id: id, user: req.session.userId }, { title, summary, content, updateTime: +new Date() }).then(function () {
                return res.json({ message: '更新成功', error: 0 });
            }).catch(function (err) {
                return res.json(err)
            });
        }
    },
    delete: function (req, res, next) {
        res.send('Delete Post');
    }
};