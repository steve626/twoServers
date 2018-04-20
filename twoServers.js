

var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;


function handleRequestOne(request, response) {
    response.end("you are old" + request.url);

}

function handleRequestTwo(request, response) {
    response.end("you are funny" + request.url);

}

var server1 = http.createServer(handleRequestOne);

var server2 = http.createServer(handleRequestTwo);

server1.listen(PORT1, function(){
    console.log("server listening on: http://localhost: " + PORT1)

    
});

server2.listen(PORT2, function(){
    console.log("server listening on: http://localhost: " + PORT2)
});



