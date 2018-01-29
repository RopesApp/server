var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GymSchema = new Schema({
  name: String,
  city: String,
  state: String,
  lat: Number,
  long: Number
});

module.exports = mongoose.model('Gym', GymSchema);
