'use strict';

var express = require('express'),
	args = process.argv.slice(2),
	app = express(),
	participants = [
	{
		id : 0,
		name : 'Tin',
		surname : 'Tvrtkovic',
		age : 29,
		company : 'Amphinicy Technologies'
	},
	{
		id : 1,
		name : 'Bill',
		surname : 'Gates',
		age : 59,
		company : 'Microsoft'
	},
	{
		id : 2,
		name : 'Mark',
		surname : 'Zuckerberg',
		age : 30,
		company : 'Facebook'
	},
	{
		id : 3,
		name : 'Larry',
		surname : 'Page',
		age : 41,
		company : 'Google'
	},
	{
		id : 4,
		name : 'Slaven',
		surname : 'Tomac',
		age : 26,
		company : 'Amphinicy Technologies'
	}
];


// console.log("Args", args);

app.use('/app', express.static(__dirname + '/app'));
app.use('/coverage', express.static(__dirname + '/coverage/PhantomJS 1.9.7 (Linux)'));

var server = app.listen(args[1], args[2], function() {
	console.log('Express server listening on host %s port %d', server.address().address, server.address().port);
});


app.get('/api/1.0/participant/:id?', function(req, res) {
	var paramId = req.param('id'),
		response;

	if (paramId === undefined) {
		response = participants;
	} else {
		console.log('Getting participant with id', paramId);
		participants.forEach(function(participant) {
			console.log('Checking participant ', participant.id);
			console.log(participant.id === parseInt(paramId));
			if (participant.id === parseInt(paramId)) {
				console.log('Found participant with id ', participant);
				response = participant;
			}
		});
	}

	console.log('Will return', response);
	return res.json(response);
});
