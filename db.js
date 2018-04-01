const Sequelize = require('sequelize');
const datatypes = Sequelize.DataTypes;
const DB = require("./configure.json").DB;
const db = new Sequelize('postgres://ufalduhpcmzzjh:dd75f850ef9f24855d76ff240afc32c6db1feb74c6be573809b0b044d2cba6f6@ec2-23-21-121-220.compute-1.amazonaws.com:5432/dcvo4s5ql5rk6b');

// const db = new Sequelize('crystal', 'crystal', 'crystal', {
//     host: 'localhost',
//     dialect: 'mysql',
//     pool: {
//         min: 0,
//         max: 5,
//     },
//     operatorsAliases: false
// });

const user = db.define('user', {
    id: {
        type: datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: datatypes.STRING,
        allowNull: false,
    }
});

const post = db.define('post', {
    id: {
        type: datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: datatypes.STRING,
        allowNull: false
    },
    content: {
        type: datatypes.TEXT,
        allowNull: true
    },
    likes: {
        type: datatypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    parentCategory: {
        type: datatypes.INTEGER,
        allowNull: false,
    },
    pic: {
        type: datatypes.STRING,
        allowNull: true
    }
});

const category = db.define('category', {
    id: {
        type: datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: datatypes.STRING,
        allowNull: false
    },
    description: {
        type: datatypes.STRING,
        allowNull: true
    },
    pic: {
        type: datatypes.STRING,
        allowNull: true
    }
});

Promise.all([
    user.sync({alter: true}),
    post.sync({alter: true}),
    category.sync({alter: true}),
])
    .then(() => console.log('Database connected!'))
    .catch((err) => console.log('error creating DB'));


module.exports = exports = {
    user,
    post,
    category,
};