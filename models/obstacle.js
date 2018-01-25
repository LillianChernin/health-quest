const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const obstacleSchema = new Schema ({
  name: String,
  difficulty: Number,
  image: String
})

const Obstacle = mongoose.model('Obstacle', obstacleSchema);

module.exports = Obstacle;
