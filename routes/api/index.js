const route = require('express').Router();

route.use('/users', require('./users'));
route.use('/catagory', require('./catagory'));
route.use('/posts', require('./posts'));

exports = module.exports = {
    route
};