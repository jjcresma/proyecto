var express = require('express');
var router = express.Router();
var reclamoController = require('../controllers/reclamoController');

/* GET home page. */
router.get('/fechaReclamo',reclamoController.fechaReclamo);

module.exports = router;