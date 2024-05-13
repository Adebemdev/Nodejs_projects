const fs = require("fs");
const http = require("http");
const url = require("url");

//FILES READING AND WRITING IN A BLOCKING AND NON-BLOCKING WAY

// How to read a data from file
// Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// // How to write data into a new file.
// const textOut = `This is what we know about alvocado ${textIn}\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File is written!");

// Non-blocking, Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERROR! 🥵");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("You have wrote a file 🤤");
//       });
//     });
//   });
// });
// console.log("Will read a file!");

/////////////////////////////////
//SERVER
// Creating a simple web server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is an OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is for PRODUCT");
  } else {
    res.writeHead(404);

    res.end("Page was not found!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listen to server on the port 8000");
});
