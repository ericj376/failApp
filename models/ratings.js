var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatingSchema = new Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	fail: { type: mongoose.Schema.Types.ObjectId, ref: 'Fail'},
	img: String
});

module.exports = mongoose.model('Rating', RatingSchema);