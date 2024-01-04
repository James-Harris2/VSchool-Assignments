const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')
const mongoose = require('mongoose')

// GET all products
            router.get('/', async (req, res) =>{
                try {
                    const products = await Product.find()
                    res.json(products);
                } catch (err) {
                    console.error(err)
                    res.status(500).json({ message: 'Error retrieving products'});
                }
            })

            
router.put("/put/:id", (req, res) => {
    console.log(req.body)
    const _id = req.params._id
    res.send('Resource Updated', _id)
})

//  productSchema.find(function(err,product) {
// if(err){
//     res.send(err)
// }
// res.json(product)
// })

// GET a single product by ID
router.get('/:id', async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id)
        if(!product) {
            res.status(404).json({ message: 'Product not found here Gandalf_the_Grey'})
        } else {
            res.json(product)
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving product'})
    }
});

// POST a new product
router.post('/', (req, res, next) => {
    const newProduct = new Product(req.body) ;
    newProduct.save((err, savedProduct) => {
        if(err) {
            res.status(500);
            return next(err);
        }
    return res.status(201).send(savedProduct)
    })
})

// PUT (update) an existing product
// router.put('/:id', async (req, res, next) =>{
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(
//         req.params.id,
//         req.body,)
//         ({ new: true })
//             if (!updatedProduct) {
//             res.status(404).json({ message: 'Product not found'})
//         } else {
//             res.json(updatedProduct)
//         }
//     })



// DELETE a product
router.delete('/:id', async (req, res) =>{
    //kyle was here
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            res.status(404).json({ message: 'Product not found'})
        } else {
            res.json ({ message: 'Product deleted successfully'})
        }
    } catch (err){
        console.error(err)
        res.status(500).json({ message: 'Error deleting product' })

    }
})

module.exports = router













