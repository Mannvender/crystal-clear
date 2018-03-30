const Sequelize = require('sequelize');

const db = new Sequelize('crystal', 'crystal', 'crystal', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
});

const user = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

const post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: true
    },
    likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    parentCategory: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

const category = db.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pic: {
        type: Sequelize.STRING,
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