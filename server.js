var express = require("express")
var server = express()
var port = 3000
var bodyparser = require("body-parser")
var cors = require("cors")
var authRoutes = require("./api/db/mlab-config")
var shipRoutes = require("./api/ship/shipRoutes")
var logRoutes = require("./api/log/logRoutes")
var commentRoutes = require("./api/comments/commentRoutes")

require('./api/db/mlab-config')

server.use(bodyparser.json())
server.use(bodyparser.urlencoded({extended:true}))
server.use(cors())

server.use(authRoutes);


server.use(shipRoutes.router)
server.use(logRoutes.router)
server.use(commentRoutes.router)

server.get("*", (err, req, res, next) => {
    res.status(404).send(err)
})


server.listen(port, () => {
    console.log("server running on port" + port)
})