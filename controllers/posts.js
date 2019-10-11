const PostModel = require('../models/post');

exports.getPosts = (req, res, next) => {
    const posts = PostModel.getAll();
    res.status(200).json(posts);
};

exports.getPost = (req, res, next) => {
    const id = req.body.id;
    const post = PostModel.getPost(id);
    res.status(200).getPost(post);
};

exports.addPost = (req, res, next) => {
    const post = new PostModel(req.body.title, req.body.content);
    console.log(req);
    post.save(post);
    res.redirect('/post/posts');
}