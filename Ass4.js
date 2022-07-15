var http=require('http');
var url=require('url');

var server=http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
    var ur=url.parse(req.url,true);
    var nm=ur.query.name;
    res.write("<h1> welcome "+ nm +"</h1>")
	res.end();
		
});
server.listen(9000,function(){console.log("server is running...")});
