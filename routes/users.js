var express = require('express');
var router = express.Router();
var userService = require('../services/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.end('respond with a resource2' + userService.getInfo());
});

router.get('/:id', function(req, res, next) {
    const {
        url,
        method,
        body,
        route,
        headers,
        baseUrl,
        originalUrl,
        params,
        query
    } = req;
    res.end(JSON.stringify({ url, method, body, route, headers, baseUrl, originalUrl, params, query }));
});
module.exports = router;