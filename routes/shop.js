const express = require('express');
const path= require('path')

//router d'express
const router = express.Router();


router.get('/',(requete,response,suivant)=>{
    console.log('deuxieme middlware')
    console.log(suivant)
    //by default send content/type == text/html
    response.status(200).sendFile(path.join(__dirname,'../','views','shop.html'))
})




module.exports = router;