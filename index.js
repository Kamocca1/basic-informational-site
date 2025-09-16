import express from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    fs.readFile("index.html", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.status(200).end(data);
        }
    });
});

app.get("/about", (req, res) => {
    res.set("Content-Type", "text/html");
    fs.readFile("about.html", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.status(200).end(data);
        }
    });
});

app.get("/contact-me", (req, res) => {
    res.set("Content-Type", "text/html");
    fs.readFile("contact-me.html", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.status(200).end(data);
        }
    });
});

app.use((req, res) => {
    res.set("Content-Type", "text/html");
    fs.readFile("404.html", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.status(404).end(data);
        }
    });
});

app.listen(8080, "localhost", () => {
    console.log("Server is running on port 8080");
});
