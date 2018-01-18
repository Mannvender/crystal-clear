const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/entries', require('./entries'))

exports = module.exports = {
    route
}