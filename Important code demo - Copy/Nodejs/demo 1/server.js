var http = require('http');
var fs = require('fs');


function send404resposne(response) {
    response.writeHead(404, {"Context-Type": "tetx/plain"});
    response.write("404Error, the requried page is not found");
    response.end();
}

function  onRequest(request, response) {
    console.log("A user made a request" + request.url);
if(request.method == 'GET' && request.url == '/'){
    response.writeHead(200, {"Context-Type": "text/html"});
    fs.createReadStream("./index.html").pipe(response);
}else{
    send404resposne(response)
}
}

http.createServer(onRequest).listen(8888);
console.log("server is now running......");
