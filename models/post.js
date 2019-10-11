const posts = [];

module.exports = class PostModel {
    constructor(title, content) {
        this.id = posts.length + 1;
        this.title = title;
        this.content = content;
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
}