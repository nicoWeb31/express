const express =require('express');
const adminController = require('../controllers/adminController')

const router = express.Router();



router.get('/add-product',adminController.addProduct)

router.post('/product',adminController.postProduct)

router.get('/products',adminController.getAllProducts)



module.exports = router;