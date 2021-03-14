var http = require('http');

http.createServer(function(req, res) {
    res.end("Não sei o que é, tem end");
}).listen(3000);