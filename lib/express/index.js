import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import busboy from 'connect-busboy';

import {HOST, PORT} from '../config';

const app = express();

function shouldCompress(req, res) {
	if (req.headers['x-no-compression']) {
		// don't compress responses with this request header 
		return false
	}

	// fallback to standard filter function 
	return compression.filter(req, res)
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(compression({filter: shouldCompress}));

app.use(busboy());

app.get('/', function (req, res) {

	res.send('Hello World!');

});


export const start = () => {

	app.listen(PORT, HOST, function () {
		console.log(`Example app listening on http://${HOST}:${PORT}`);
	});

};