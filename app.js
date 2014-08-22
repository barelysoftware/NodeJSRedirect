var http = require("http");
var url = require("url");
var port = process.env.PORT || 1337;

http.createServer(function(req,res){

	var requrl = url.parse(req.url,true);

	res.writeHead(301, {
		"location" : "http://barelysoftware.net/Articles/BlogPost" + requrl.path
	});

	res.end();
}).listen(port);
