const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect(
	process.env.mongo_uri,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) throw err;
		console.log('Successfully connected to MongoDB');
		console.log(mongoose.connection.host);
		// console.log(mongoose.connection.port);
	}
);

app.use(express.json()); // to parse json object
app.use(morgan('dev'));

app.use('/api/user', require('./routes/userApi'));

// console.log('process.env', process.env);

const PORT = process.env.PORT || 5005;

app.listen(PORT, console.log(`Server running in ${PORT} mode on port ${PORT}`));
