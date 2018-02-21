var mongoose = require("mongoose")
var Schema = mongoose.Schema
var schemaName = "Comment"

var schema = new Schema({
    author: { type: String, required: true },
    topic: { type: String },
    text: { type: String, required: true },
    date: { type: Date, reuiqred: true, default: Date.now },
    //relationships
    logId: { type: Schema.Types.ObjectId, required: true, ref: "Log" },
    shipId: { type: Schema.Types.ObjectId, required: true, ref: "Ship" }
})




module.exports = mongoose.model(schemaName, schema)