var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatingSchema = new Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	fail: { type: mongoose.Schema.Types.ObjectId, ref: 'Fail'},
  ratingScale: Number
});

module.exports = mongoose.model('Ratings', RatingSchema);