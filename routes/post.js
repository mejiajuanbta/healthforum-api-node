const express = require('express');
const postController = require('../controllers/posts');

const router = express.Router();

router.get('/posts', postController.getPosts);

router.get('/:id', postController.getPost);

router.post('/add-post', postController.addPost);


module.exports = router;