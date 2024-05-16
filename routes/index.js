const express = require('express');
const router = express.Router();
const mainController = require('../controllers/index');
const contactController = require('../controllers/contactController');

router.get('/', mainController.viewAll);

router.post('/contact', contactController.sendMessage);

module.exports = router;
