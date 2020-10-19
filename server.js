const http = require('http');

const express = require('express');

const app = express();
//midlware
app.use((req,res,next)=>{
    console.log('je suis dans le midllware, je suis appeller a chaque requete, req ,res, et prochain middware')
    console.log(next)
    next()
})

app.use((requete,response,suivant)=>{
    console.log('deuxieme middlware')
    console.log(suivant)
})

const server = http.createServer(app);
server.listen(3000);