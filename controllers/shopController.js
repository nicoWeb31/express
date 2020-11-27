const Product = require("../models/product");


//
exports.getProducts = (requete, response, suivant) => {
    Product.fetchAll((products) => {
        response.status(200).render("shop/product-list", {
            products: products,
            pageTitle: "All-products",
            path: "/products",
        });
    });
};



exports.getCart = (req,res,next) => {
    res.status(200).render("shop/cart", {
        path: '/cart',
        pageTitle: "Your cart",

    })
}

exports.getCheckout = (req,res,next) => {
    res.status(200).render("shop/checkout",{
        pageTitle: "Checkout",
        path: "/checkout"
    })
}

exports.getIndex = (req,res,next)=>{
    Product.fetchAll((products) => {
        res.status(200).render("shop/index", {
            products: products,
            pageTitle: "shop",
            path: "/shop",
        });
    });
}
