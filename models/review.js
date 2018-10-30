var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	userName: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	name: {
		type: Schema.Types.ObjectId,
		ref: 'Coffee'
	},
	title: String,
	brewMethod: String, // text
    flavors: String, // array
    notes: String, // long text
	rating: {
		type: Number,
		min: 0,
		max: 5
	} // 0-5
});
module.exports = mongoose.model('Review', reviewSchema);