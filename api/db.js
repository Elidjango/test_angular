const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "db_employee"
    },
    pool: {
        min: 0,
        max: 10 
    }
});

module.exports = knex;