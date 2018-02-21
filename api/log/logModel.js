var mongoose = require("mongoose")
var Schema = mongoose.Schema
var schemaName = "Log"

var schema = new Schema({
    title: { type: String },
    date: { type: Date, required: true, default: Date.now },
    // relationships
    commentId: { type: Schema.Types.ObjectId, ref: 'Comment' },
    shipId: { type: Schema.Types.ObjectId, required: true, ref: "Ship" }
})



module.exports = mongoose.model(schemaName, schema)