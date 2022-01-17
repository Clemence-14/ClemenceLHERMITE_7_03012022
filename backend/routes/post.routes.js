const router = require('express').Router();
const postController = require('../controllers/post.controller');
const auth = require('../middleware/auth.middleware');

// CRUD posts
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getOnePost)
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

// Like & unlike
//router.post('/like-post/:id', postController.likePost);
//router.patch('/unlike-post/:id', postController.unLikePost);





















module.exports = router;