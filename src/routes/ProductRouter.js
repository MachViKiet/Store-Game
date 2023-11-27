const express = require('express');
const router = express.Router()
const productController = require('../controllers/ProductController');
const { authMiddleware, authUserMiddleware } = require('../middleware/authMiddleware');

router.post('/create', productController.createProduct)
router.put('/update/:id', authMiddleware, productController.updateProduct)
router.get('/getDetails/:id', productController.getDetailsProduct)
router.delete('/delete/:id', productController.deleteProduct)

module.exports = router