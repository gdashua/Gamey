var http = require('http');
var fs = require('fs');
var route = require('url');
var qs = require('querystring');

function handleServer(req, res){
	var path =route.parse(req.url, true);
	var query= path.query;
	if (req.url === '/'){
		res.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream('./myForm.html').pipe(res);
	}else if(path.pathname === './message' && req.method === 'POST'){
		var rawData='';

		req.on('data', data=> rawData +=data).on('end', ()=>{
			var info = qs.parse(rawData);
			res.end('Message: ${info.message}'})
		}else{
			res.writeHead(404, {"Content-Type": "text/plain"});
			res.end('the requested page could not be found');
		}
	}
	
	http.createServer(handleServer).listen(8080);
	console.log('Server is running on port 8080...');	
