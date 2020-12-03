const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "db_test_angular"
    },
    pool: {
        min: 0,
        max: 10 
    }
});

module.exports = knex;