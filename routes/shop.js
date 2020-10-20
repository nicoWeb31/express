const express = require('express');
const path= require('path')
const routeDir = require('../utils/path')

//router d'express
const router = express.Router();

//
const adminData = require('./admin')


router.get('/',(requete,response,suivant)=>{
    console.log('deuxieme middlware')
    console.log(suivant)
    console.log(adminData.products)
    //by default send content/type == text/html
    response.status(200).render('shop')
})




module.exports = router;