const Catagory = require('../../db').category;
const route = require('express').Router();

route.get('/', (req, res) => {
    // get all posts
    Catagory.findAll()
        .then((entries) => {
            res.status(200).send(entries)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve categories"
            })
        })
});

route.post('/', (req, res) => {
    // Add a new product
    Catagory.create({
        name: req.body.name,
        description: req.body.description,
        pic: req.file.filename
    }).then((entry) => {
        res.status(201).send(entry)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding category"
        })
    })
});

exports = module.exports = route;