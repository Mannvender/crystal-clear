const Entry = require('../../db').Entry
const route = require('express').Router();

route.get('/', (req, res) => {
    Entry.findAll()
        .then((entries) => {
            res.status(200).send(entries)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve entries"
            })
        })
})

route.post('/', (req, res) => {
    // Add a new product
    Entry.create({
        name: req.body.name,
        descriptionText: req.body.descriptionText
    }).then((entries) => {
        res.status(201).send(entries)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

exports = module.exports = route