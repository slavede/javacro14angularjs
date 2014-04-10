'use strict';

var express = require('express'),
	args = process.argv.slice(2),
	app = express();

// console.log("Args", args);

app.use('/', express.static(__dirname + '/app'));

var server = app.listen(args[1], args[2], function() {
	console.log('Express server listening on host %s port %d', server.address().address, server.address().port);
});

app.get('/', function(req, res){
	res.sendfile('app/index.html');
});

app.get('/api/example', function(req, res) {
	res.json(
		[
			{
				name : 'Slaven',
				surname : 'Tomac',
				age : 26
			}
		]
		);
});