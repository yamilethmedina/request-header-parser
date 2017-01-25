'use strict';

var express = require('express');
var os = require('os');


var app = express();


var port = 8080;
app.listen(process.env.PORT || port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});





app.get('/', function (req, res) {
	var ip = req.ip;
	var language = req.headers['accept-language'].split(',')[0];
	var software = req.headers['user-agent'].split(') ')[0].split(' (')[1];
	res.json({
		"ipaddress": ip,
		"language": language,
		"software": software
	})
})

// app.get('/:timestamp', function (req, res) {
// 	// res.json({unix: '', natural: ''})

// 	var time = moment(req.params.timestamp, 'MMMM DD, YYYY')
// 	if (!time.isValid()) {
// 		time = moment.unix(req.params.timestamp)
// 	}

// 	if (!time.isValid()) {
		
// 			res.json({
// 			"unix": null,
// 			"natural": null
// 		})
// 	}
// 	else {
// 		res.json({
// 			"unix": time.format('X'),
// 			"natural": time.format('MMMM DD, YYYY')
// 		})
// 		}
// 	})
