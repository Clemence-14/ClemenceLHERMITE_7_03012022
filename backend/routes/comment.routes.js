const router = require('express').Router();
const commentController = require('../controllers/comment.controller');
const auth = require('../middleware/auth.middleware');

// CRUD comments
router.get('/allcomments', commentController.getAllComments);
router.get('/:id', commentController.getOneComment);
router.post('/:id', commentController.createComment);
router.delete('/:id', commentController.deleteOneComment);
router.put('/:id', commentController.updateComment);






module.exports = router;