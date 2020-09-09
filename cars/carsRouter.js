const express = require('express')

const router = express.Router()
const db = require('../data/connnection')

module.exports = router

router.get('/', (req, res) => {
    db('cars').then(cars => res.status(200).json(cars))
})

router.get('/:id', (req, res) => {
    db('cars').where('id', req.params.id).then(car => res.status(200).json(car))
})

