const express = require('express');

//router d'express
const router = express.Router();


router.get('/',(requete,response,suivant)=>{
    console.log('deuxieme middlware')
    console.log(suivant)
    //by default send content/type == text/html
    response.status(200).send('<h1>hello world</h1>')
})




module.exports = router;