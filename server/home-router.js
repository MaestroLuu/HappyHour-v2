const express = require("express");
const router = express.Router();
const { Review } = require("./models");
const { Op } = require("sequelize");
const withAuth = require("../utils/withAuth");

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router;