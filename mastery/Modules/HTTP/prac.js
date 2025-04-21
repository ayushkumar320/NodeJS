const http = require("http");
const fs = require("fs");

// const myServer = http.createServer(function(req, res){
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write("This is a server");
//     res.end();
// });

// myServer.listen(3000);


// const myServer = http.createServer((req, res) => {
//     res.end("This is my server and the response is already ended");
// });

// myServer.listen(3000);


const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} - ${req.url} LoggedIn\n`;
    fs.appendFile("./myLogs.txt", log, (err, data) => {
        if(err){
            console.log("Error");
            res.end("Error in reading the logbook");
        } else {
            switch(req.url){
                case '/':
                    res.end("This is the about page of my server!");
                    break;
                case '/about':
                    res.end("I am Ayush, This is my first Node.JS server");
                    break;
                case '/contact':
                    res.end("My insta - @ayushnotkumar\nTwitter - @notaprocoder");
                    break;
                default:
                    res.end("404 | Error not found the page");
                    break;
            }
        }
    });
});

myServer.listen(8080, () => {
    console.log("Starting the server....");
});