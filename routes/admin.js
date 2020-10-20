const express =require('express');
const productController = require('../controllers/products')

const router = express.Router();



router.get('/product',productController.getAddProduct)

//app---->methode or  use for midllewere or all methode
router.post('/product',productController.postProduct)


module.exports = router;