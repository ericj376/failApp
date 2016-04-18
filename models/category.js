var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  image: String,
  icon: String,
});

module.exports = mongoose.model('Category', CategorySchema);