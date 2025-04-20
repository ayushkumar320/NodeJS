const http = require("http");
const fs = require('fs');
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Recieved\n`;
    fs.appendFile("./log.txt",log, (err, data) => {
        if(err){
            res.end('Error')
        }
        switch(req.url){
            case '/': 
                res.end("HomePage");
                break;
            case '/about': 
                res.end("I am Ayush");
                break;
            default:
                res.end("404 Not Found!");
                break;
        }
        
        res.end("Hello from server Again!");

    });
});

myServer.listen(8000, () => {
    console.log("Server Started!");
});