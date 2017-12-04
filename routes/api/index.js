const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.json({ code: 1, error: 0, message: 'OK' });
});

module.exports = router;