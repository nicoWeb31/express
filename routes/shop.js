const express = require('express');
const path= require('path')
const routeDir = require('../utils/path')

//router d'express
const router = express.Router();

//
const adminData = require('./admin')


router.get('/',(requete,response,suivant)=>{


    const product = adminData.products

    //by default send content/type == text/html

    //response.status(200).render('shop.html.twig',{products:adminData.products, docTitle: 'Shop'})
    response.status(200).render('shop',{products:adminData.products, docTitle: 'Shop'})


})




module.exports = router;