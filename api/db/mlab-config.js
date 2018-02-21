var mongoose = require("mongoose")
var connectionString = "mongodb://Chuckinator:Chuckinator@ds044907.mlab.com:44907/starlogs"
var connection = mongoose.connection

mongoose.connect(connectionString)

connection.on('error', (err) => {
    console.log('mlab Error: ', err)
})

connection.once('open', () => {
    console.log('connected to mLab')
})