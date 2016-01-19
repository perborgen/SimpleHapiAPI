var Hapi = require('hapi');
server = new Hapi.Server();

server.connection({
	port: 8080,
	host: 'localhost'
});

server.register(require('inert'), function(err){
    if (err) {
        console.log(err);
    }
});

var TRIP = {
	time: 'tomorrow',
	origin: 'home',
	destination: 'school',
	duration: '2 hours'
};

server.route([
	{
		method: 'GET',
		path: '/',
		handler: function(request, reply) {
			reply.file('index.html');
		}
	},
	{
		method: 'GET',
		path: '/api/trip',
		handler: function(request, reply) {
			reply({
				trip: TRIP
			});
		}
	}
]);

server.start(function(){
	console.log('server is running at port 8080');
});


