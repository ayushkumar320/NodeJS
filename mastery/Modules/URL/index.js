const http = require("http");
const fs = require('fs');
const url = require("url");
const myServer = http.createServer((req, res) => {
    if(require.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Request Recieved\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("./log.txt",log, (err, data) => {
        if(err){
            res.end('Error')
        }
        switch(myUrl.pathname){
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
    });
});

myServer.listen(8000, () => {
    console.log("Server Started!");
});