const express = require('express');
const router = express.Router()
const productController = require('../controllers/ProductController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/create',authMiddleware(['Admin', 'Seller']), productController.createProduct)
router.put('/update/:id', authMiddleware(['Admin', 'Seller']), productController.updateProduct)
router.get('/getDetails/:id', productController.getDetailsProduct)
router.delete('/delete/:id',authMiddleware(['Admin', 'Seller']),  productController.deleteProduct)

module.exports = router