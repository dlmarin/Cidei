var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello CIDEI\n");
});

//se levanta el servidor por el puerto 3333
//en el navegador se pone http://127.0.0.1:3333
server.listen(3333);