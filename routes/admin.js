const express =require('express');
const path = require('path');

const router = express.Router();

router.get('/add-prod',(requete,response,suivant)=>{
    // console.log('deuxieme middlware')
    // console.log('addprod')
    //by default send content/type == text/html
    response.status(200).sendFile(path.join(__dirname,'../','views','add-product.html'))
})

//app---->methode or  use for midllewere or all methode
router.post('/product',(req,res)=>{


    console.log(req.body)


    //redirect by express
    res.redirect('/');

})


module.exports = router;