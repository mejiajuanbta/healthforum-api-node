const comments = [];

module.exports = class CommentModel {
    constructor(postId, content) {
        this.id = comments.length + 1;
        this.userId = 0;
        this.postId = postId;
        this.content = content;
    }

    save() {
        comments.push(this)
    }

    static getPost(id) {
        return comments[id];
    }

    static getAll() {
        return comments;
    }

    static getPostComments(postId) {
        return comments;
    }
}