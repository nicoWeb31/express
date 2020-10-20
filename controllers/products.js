const Product = require('../models/product')

exports.getAddProduct = (requete,response,suivant)=>{
    response.status(200)
    .render('add-product.html.twig',
    {pageTitle: 'Add pproduct',
    path:'/admin/product'})
}

exports.postProduct = (req,res)=>{

    const product = new Product(req.body.title);
    product.save();

    //redirect by express
    res.redirect('/');

}


exports.getProduct = (requete,response,suivant)=>{

    const products = Product.fetchAll();

    response.status(200).
    render('shop.html.twig',{
        products:products,
        pageTitle:'Shop',
        path:'/shop'})


}