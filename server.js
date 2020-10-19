
const express = require('express');
const bodyParser = require('body-parser');

//----routes
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const app = express();
express.urlencoded({extended: true})



//-----------------midlware---------------------------------

//bodyparer
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({extended: true}))


app.use((req,res,next)=>{
    console.log('je suis dans le midllware, je suis appeller a chaque requete, req ,res, et prochain middware')
    console.log(next)
    next()
})

//-------------route--------------------------//
app.use(adminRoute);
app.use(shopRoute);










//-------------------------------------------------------------------

app.listen(3000) // ou  remplace la creation du server ci dessou
// const server = http.createServer(app);
// server.listen(3000);