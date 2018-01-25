const express = require('express');
const consequenceRoutes = express.Router();
const db = require('../models');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

consequenceRoutes.use(bodyParser.json());
consequenceRoutes.use(bodyParser.urlencoded({ extended: true }));

consequenceRoutes.get('/breakfast-bad', (req, res) => {
})
