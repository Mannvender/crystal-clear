const Sequelize = require('sequelize');
const datatypes = Sequelize.DataTypes;

const db = new Sequelize('crystal', 'crystal', 'crystal', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    },
    operatorsAliases: false
});

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