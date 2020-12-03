const db = require("../db");

const list = () => {
    return db("employee").select(
        "id_usu",
        "position_usu",
        "age_usu",
        "username_usu",
        "date_create",
        "date_update"
    ).where({
        active_usu: "1"
    });
}

const list_paperbin = () => {
    return db("employee").select(
        "id_usu",
        "position_usu",
        "age_usu",
        "username_usu",
        "date_create",
        "date_update"
    ).where({
        delete_usu: "1"
    });
}

const single = (id_usu) => {
    return db("employee").select(
        "id_usu",
        "position_usu",
        "age_usu",
        "username_usu",
        "date_create",
        "date_update"
    ).where({
        id_usu: id_usu
    });
}

const add = (obj) => {
    return db("employee").insert({
        "position_usu": obj.position,
        "age_usu": obj.age,
        "username_usu": obj.username,
        "date_create": obj.date_create,
        "date_update": obj.date_update,
        "active_usu": "1",
        "delete_usu": "0"
    });
}

const update = (id_usu, obj) => {
    return db("employee").where({id_usu: id_usu}).update({
        "position_usu": obj.position,
        "age_usu": obj.age,
        "username_usu": obj.username,
        "date_update": obj.date_update
    });
}

const paperbin = (id_usu, obj) => {
    return db("employee").where({id_usu: id_usu}).update({
        "active_usu": "0",
        "delete_usu": "1",
        "date_update": obj.date_update
    });
}

const delete_permanente = (id_usu) => {
    return db("employee").where({id_usu: id_usu}).delete();
}

module.exports = {
    list,
    list_paperbin,
    single,
    add,
    update,
    paperbin,
    delete_permanente
}