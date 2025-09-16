import http from "http";
import fs from "fs";

// Create a server that listens for requests
const server = http.createServer((req, res) => {
    // Add the type of data the server will respond with, in the response's header
    res.setHeader("Content-Type", "text/html");

    // Set up which file the serve will respond with for each requested url
    let file;
    switch (req.url) {
        case "/":
            file = "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            file = "about.html";
            res.statusCode = 200;
            break;
        case "/contact-me":
            file = "contact-me.html";
            res.statusCode = 200;
            break;
        default:
            file = "404.html";
            res.statusCode = 404;
            break;
    }

    // Read the data on the file that the server will respond with
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // Add the file's data to the response's body
            res.end(data);
        }
    });
});

server.listen(8080, "localhost", () => {
    console.log("Server is running on port 8080");
});
