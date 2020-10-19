
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//express.urlencoded({extended: true})



//-----------------midlware---------------------------------

//bodyparer
app.use(bodyParser.urlencoded({extended:false}));


app.use((req,res,next)=>{
    console.log('je suis dans le midllware, je suis appeller a chaque requete, req ,res, et prochain middware')
    console.log(next)
    next()
})

app.use('/add-prod',(requete,response,suivant)=>{
    console.log('deuxieme middlware')
    console.log('addprod')
    //by default send content/type == text/html
    response.status(200).send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add</button></form>')
})

app.use('/product',(req,res)=>{


    console.log(req.body)


    //redirect by express
    res.redirect('/');

})

app.use('/',(requete,response,suivant)=>{
    console.log('deuxieme middlware')
    console.log(suivant)
    //by default send content/type == text/html
    response.status(200).send('<h1>hello world</h1>')
})






//-------------------------------------------------------------------

app.listen(3000) // ou  remplace la creation du server ci dessou
// const server = http.createServer(app);
// server.listen(3000);