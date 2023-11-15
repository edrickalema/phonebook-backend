const express = require('express');
const router = express.Router();

const {getPeople, createPerson, getPerson, deletePerson, homePage} = require('./../controller/controller');

router
    .route('/')
    .get(getPeople)
    .post(createPerson)

router
    .route('/:id')
    .get(getPerson)
    .delete(deletePerson)
router
    .route('/info')
    .get(homePage)

module.exports = router;

