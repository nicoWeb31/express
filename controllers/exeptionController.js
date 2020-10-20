exports.error404 = (req,res,next)=>{
    res.status(404)
    .render('404.html.twig',{
        pageTitle:'page not found'
    })
}