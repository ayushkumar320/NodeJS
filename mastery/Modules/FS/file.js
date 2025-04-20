const fs = require('fs');

// Sync... 
// fs.writeFileSync('./test.txt', "Hey there!");


// Async..
// fs.writeFile("./test.txt", "Hello World!", (error) => {});

// Reading a file sync
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result)


// Reading a file async
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// Append File Sync

// fs.appendFileSync("./test.txt", `${Date.now()} LoggedIn\n`);

// Copy Sync
// fs.cpSync("./test.txt", "./copy.txt");

// Unlink a file (Delete)
fs.unlinkSync("./copy.txt")

