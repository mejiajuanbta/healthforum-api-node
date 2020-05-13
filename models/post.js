const CommentModel = require('../models/comment')
const posts = [];

module.exports = class PostModel {
    constructor(title, content) {
        this.id = posts.length + 1;
        this.userId = 0;
        this.title = title;
        this.content = content;
        this.comments = [];
    }

    save() {
        posts.push(this)
    }

    static getPost(id) {
        return posts[id];
    }

    static getAll() {
        return posts;
    }

    static getPostComments() {
        return CommentModel.getPostComments(this.id);
    }
}