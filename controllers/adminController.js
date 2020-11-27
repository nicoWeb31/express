const Product = require("../models/product");

exports.addProduct = (requete, response, suivant) => {
    response.status(200).render("admin/add-product", {
        pageTitle: "Add pproduct",
        path: "/admin/product",
    });
};

//
exports.postProduct = (req, res) => {
    const product = new Product(req.body.title);
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