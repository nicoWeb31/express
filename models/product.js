//const products = []
const fs = require('fs');
const path = require('path')
//path fichier
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json')

const getProductFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([])
        }
        cb(JSON.parse(fileContent))
    })
}



module.exports = class Product {
    constructor(title,imgUrl,description,price) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.description= description;
        this.price = price;
    }

    save() {

        getProductFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getProductFromFile(cb)

    }

}