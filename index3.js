const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/src/index.html')
})

app.get("/whattzap", function(req, res) {
    res.sendFile(__dirname + '/src/whattzap.html')
})

app.get("/idade", function(req, res) {
    res.send("51 anos")
})

app.listen(3000)