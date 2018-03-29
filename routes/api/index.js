const route = require('express').Router();

route.use('/users', require('./users'));
route.use('/entries', require('./category'));
route.use('/posts', require('./posts'));

exports = module.exports = {
    route
};