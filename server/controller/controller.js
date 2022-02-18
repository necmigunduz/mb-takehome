// Controller
import Product from '../model/product.js';

// Index
exports.index = (req, res) => {
    Product.get((err, products) => {
        if(err) {
            res.json({
                status: 'error',
                message: err
            })
        }

        res.json({
            status: 'Success',
            message: 'Products retrieved successfully!',
            data: products
        })
    })
}

// Create
exports.new = (req, res) => {
    let product = new Product();
    product.name = req.body.name ? req.body.name : product.name;
    product.brand = req.body.brand;
    product.color = req.body.color;
    product.desc = req.body.desc;
    product.price = req.body.price;
    product.amount = req.body.amount;

    // Save and check errors
    product.save(() => {
        if(err) {
            res.json({
                message: err
            })
        }

        res.json({
            message: 'New product is created!',
            data: product
        })
    })
}

// View
exports.view = (req, res) => {
    Product.findById(req.params.product_id, (err, product) => {
        if(err) {
            res.send(err)
        }

        res.json({
            message: 'Product details are loading...',
            data: product
        })
    })
}

// Update
exports.update = (req, res) => {
    Product.findById(req.params.product_id, (err, product) => {
        if(err) {
            res.send({
                message: err
            })
        }

        product.name  = req.body.name ? req.body.name : product.name;
        product.brand = req.body.brand;
        product.color = req.body.color;
        product.desc = req.body.desc;
        product.price = req.body.price;
        product.amount = req.body.amount;

        // Save the product updates
        product.save((err) => {
            if(err) {
                res.send({
                    message: err
                })
            }

            res.json({
                message: 'Product details are updated successfully!',
                data: product
            })
        })
    })
}

// Delete
exports.delete = (req, res) => {
    Product.remove({
        _id: req.params.product_id
    }, (err, product) => {
        if(err) {
            res.send({
                message: err
            })
        }

        res.json({
            status: 'Success',
            message: 'Product is deleted!'
        })
    })
}