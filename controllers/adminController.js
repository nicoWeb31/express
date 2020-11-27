const Product = require("../models/product");

exports.addProduct = (requete, response, suivant) => {
    response.status(200).render("admin/add-product", {
        pageTitle: "Add pproduct",
        path: "/admin/product",
    });
};

//
exports.postProduct = (req, res) => {
    const {title, description,price, imgUrl} = req.body;
    const product = new Product(title,imgUrl,description,price);
    product.save();

    //redirect by express
    res.redirect("/");
};

//
exports.getAllProducts = (req,res,next) => {
    Product.fetchAll((products) => {
        res.status(200).render("admin/products", {
            products: products,
            pageTitle: "All-products",
            path: "/admin/products",
        });
    });
}