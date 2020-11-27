const express = require('express');
const path = require('path')


//----routes
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const app = express();
express.urlencoded({extended: true})

const exeptionController = require('./controllers/exeptionController')

//Template engine twig
//app.set('view engine', 'twig')

////Template engine twig
app.set('view engine', 'pug')

app.set('views', 'views')

//-----------------midlware---------------------------------

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//for css
app.use(express.static(path.join(__dirname,'public')))


app.use((req,res,next)=>{
    console.log('je suis dans le midllware, je suis appeller a chaque requete, req ,res, et prochain middware')
    console.log(next)
    next()
})

//-------------route--------------------------//
app.use('/admin',adminRoute);
app.use(shopRoute);


//404
app.use('/',exeptionController.error404)



//-------------------------------------------------------------------
module.exports = app;