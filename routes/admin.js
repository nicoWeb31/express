const express =require('express');
const productController = require('../controllers/products')

const router = express.Router();



router.get('/product',productController.getAddProduct)

router.post('/product',productController.postProduct)


module.exports = router;