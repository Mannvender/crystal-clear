const Post = require('../../db').post;
const route = require('express').Router();

route.get('/', (req, res) => {
    // get all posts
    Post.findAll()
        .then((entries) => {
            res.status(200).send(entries)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve posts"
            })
        })
});

route.get('/specific', (req, res) => {
    // get specific posts
    let CatagoryID = req.query.CatagoryID;
    console.log(CatagoryID);
    identifierObj = {};
    identifierObj.parentCategory = CatagoryID;
    Post.findAndCount({where: identifierObj})
        .then((posts) => {
            res.status(200).send(posts)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve posts"
            })
        })
});

route.post('/', (req, res) => {
    // Add a new product
    Post.create({
        name: req.body.name,
        content: req.body.content,
        parentCategory: req.body.parentCategory,
        pic: req.file.filename
    }).then((entry) => {
        res.status(201).send(entry)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding posts"
        })
    })
});

exports = module.exports = route;