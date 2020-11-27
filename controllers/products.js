const Product = require("../models/product");

exports.getAddProduct = (requete, response, suivant) => {
    response.status(200).render("admin/add-product", {
        pageTitle: "Add pproduct",
        path: "/admin/product",
    });
};

exports.postProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();

    //redirect by express
    res.redirect("/");
};

exports.getProduct = (requete, response, suivant) => {
    Product.fetchAll((products) => {
        response.status(200).render("shop/product-list", {
            products: products,
            pageTitle: "product-list",
            path: "/shop",
        });
    });
};
