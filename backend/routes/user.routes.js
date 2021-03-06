const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config');

// Auth
router.post("/register", authController.signup);
router.post('/login', authController.signin);
router.get('/logout', authController.logout);

// User database
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.put('/:id', multer, userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;