var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FailSchema = new Schema({
	title: String,
	challenge: String,
	img: String,
	icon: String,
	ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ratings' }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Fail', FailSchema);