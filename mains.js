const http = require("http");
var timeInWord = require("time-in-words");

http.createServer(function (request, response){
    //send the HTTP header
    //HTTP Status: 200 : OK
    //Content Type: text/plain
    response.writeHead(200,
        {'Content-Type':'text/html'});

    //this will return a time
    const time = new Date();
    const hour = time.getHours() - 12;
    const minute = time.getMinutes();
    const newTime = timeInWord( hour, minute)

    const output = '<h3>Hello World</h3><p>The time is :' + newTime + '</p>';
    

    //Send the response body 
    response.end(output);
     }).listen(8081);

     // Console will print the message 
    console.log('server running at http://127.0.0.1:8081/');


