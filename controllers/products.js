exports.getAddProduct = (requete,response,suivant)=>{
    response.status(200)
    .render('add-product.html.twig',
    {pageTitle: 'Add pproduct',
    path:'/admin/product'})
}

