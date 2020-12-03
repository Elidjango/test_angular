"use strict"
const _ModelEmployee = require("../models/ModelEmployee");

const AllEmployee = (req, res) => {
    _ModelEmployee.list().then(data => {
        res.status(200).json(data).end();
    }).catch(err => {
        res.send({err: err}).end();
    });
}

const ListPaperbinEmployee = (req, res) => {
    _ModelEmployee.list_paperbin().then(data => {
        res.status(200).json(data).end();
    }).catch(err => {
        res.send({err: err}).end();
    });
}

const DetailEmployee = (req, res) => {
    _ModelEmployee.single(req.params.id).then(data => {
        res.status(200).json(data).end();
    }).catch(err => {
        res.send({err: err}).end();
    });
}

const AddEmployee = (req, res) => {
    _ModelEmployee.add({
        position: req.body.position,
        age: req.body.age,
        username: req.body.username,
        date_create: req.body.date_create,
        date_update: req.body.date_create
    }).then(resp => {
        res.json(resp).end();
    }).catch(err => {
        res.send({err: err}).end();
    });
}

const UpdateEmployee = (req, res) => {
    _ModelEmployee.update(req.params.id, {
        position: req.body.position,
        age: req.body.age,
        username: req.body.username,
        date_update: req.body.date_update
    }).then(resp => {
        res.json(resp).end();
    }).catch(err => {
        res.send({err: err}).end();
    });
}

const PaperbinEmployee = (req, res) => {
    _ModelEmployee.update(req.params.id, {
        date_update: req.body.date_update
    }).then(resp => {
        res.json(resp).end();
    }).catch(err => {
        res.send({err: err}).end();
    });
}

const DeleteEmployee = (req, res) => {
    _ModelEmployee.delete_permanente(req.params.id).then(resp => {
        res.json(resp).end();
    }).catch(err => {
        res.send({err: err}).end();
    });
}

module.exports = {
    AllEmployee,
    ListPaperbinEmployee,
    DetailEmployee,
    AddEmployee,
    UpdateEmployee,
    PaperbinEmployee,
    DeleteEmployee
}