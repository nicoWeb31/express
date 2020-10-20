const express =require('express');
const productController = require('../controllers/products')

const router = express.Router();

const products = [];

router.get('/product',productController.getAddProduct())




//app---->methode or  use for midllewere or all methode
router.post('/product',(req,res)=>{


    console.log(req.body)
    products.push({title : req.body.title})


    //redirect by express
    res.redirect('/');

})


exports.routes = router
exports.products = products