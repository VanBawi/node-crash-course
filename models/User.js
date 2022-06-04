const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, 'Please add your name'],
		},
		phone: {
			type: Number,
			required: [true, 'Please add a your phone number'],
		},
		receipt: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);
