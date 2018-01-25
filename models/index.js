const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/health-quest');

module.exports.Food = require('./food');
module.exports.Obstacle = require('./obstacle');
