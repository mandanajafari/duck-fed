const express = require('express');
const entry = require('../models/entry');
const repository = require('../repositories/entries');

const router = express.Router();

router.post('/submit', function (req, res) {
    const { duckCount, foodId, time, location, quantity } = req.body;
    const item = new entry({
        duckCount, foodId, time, location, quantity
    });
    repository.add(item);
    res.json({ result: true });
});

router.post('/getCategories', function (req, res) {
    const fakeData = [
        {
            name: "A",
            key: "1"
        },
        {
            name: "B",
            key: "2"
        },
        {
            name: "C",
            key: "3"
        },
        {
            name: "D",
            key: "4"
        },
        {
            name: "E",
            key: "5"
        }
    ];
    // TODO: Read from a valid resource.
    return res.json(fakeData);
});

module.exports = router;