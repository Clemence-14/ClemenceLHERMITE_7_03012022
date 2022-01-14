const router = require('express').Router();
const postController = require('../controllers/post.controller');
const auth = require('../middleware/auth.middleware');

// CRUD
router.get('/', auth, postController.getAllPosts);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);





















module.exports = router;