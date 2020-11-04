const express = require("express")
var cors = require("cors");
const session = require("express-session");
const router = require("./routers/routers")
const server = express()
server.use(express.json());
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "string"
}))
server.use(cors());
server.use("/api", router);

module.exports = server;