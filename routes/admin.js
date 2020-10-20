const express =require('express');
const path = require('path');
const routeDir = require('../utils/path')

const router = express.Router();

const products = [];

router.get('/product',(requete,response,suivant)=>{
    // console.log('deuxieme middlware')
    // console.log('addprod')
    //by default send content/type == text/html
    response.status(200).render('add-product.html.twig',{pageTitle: 'Add pproduct',path:'/admin/product'})
})

//app---->methode or  use for midllewere or all methode
router.post('/product',(req,res)=>{


    console.log(req.body)
    products.push({title : req.body.title})


    //redirect by express
    res.redirect('/');

})


exports.routes = router
exports.products = products