
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')


//----routes
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const app = express();
express.urlencoded({extended: true})


const routeDir = require('./utils/path');

//Template engine twig
app.set('view engine', 'twig')

////Template engine twig
//app.set('view engine', 'pug')

app.set('views', 'views')

//-----------------midlware---------------------------------

//bodyparer
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({extended: true}))

//for css
app.use(express.static(path.join(__dirname,'public')))


app.use((req,res,next)=>{
    console.log('je suis dans le midllware, je suis appeller a chaque requete, req ,res, et prochain middware')
    console.log(next)
    next()
})

//-------------route--------------------------//
app.use('/admin',adminRoute.routes);
app.use(shopRoute);


//404
app.use('/',(req,res,next)=>{
    res.status(404)
    .render('404.html.twig',{pageTitle:'page not found'})
})



//-------------------------------------------------------------------

app.listen(3000) // ou  remplace la creation du server ci dessou
// const server = http.createServer(app);
// server.listen(3000);