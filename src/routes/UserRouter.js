const express = require('express');
const router = express.Router()
const userController = require('../controllers/UserController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/update-user/:id', authMiddleware(['Admin']), userController.updateUser)
router.delete('/delete-user/:id', authMiddleware(['Admin']), userController.deleteUser)
router.get('/getAll-user', authMiddleware(['Admin']), userController.getAllUser)
router.get('/getDetails-user/:id', authMiddleware(['Admin']), userController.getDetailsUser)
router.post('/refresh-token', userController.refreshToken)

module.exports = router