const router = require('express').Router();
const postController = require('../controllers/post.controller');
const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config');

// CRUD posts
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getOnePost)
router.post('/', multer, postController.createPost);
router.put('/:id', multer, postController.updatePost);
router.delete('/:id', postController.deletePost);





// Like & unlike
//router.post('/like-post/:id', postController.likePost);
//router.patch('/unlike-post/:id', postController.unLikePost);


module.exports = router;