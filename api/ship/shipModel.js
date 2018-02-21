var mongoose = require("mongoose")
var Schema = mongoose.Schema
var schemaName = "Ship"

var schema = new Schema({
    name: { type: String, required: true },
    class: { type: String, required: true, enum: ["destroyer", "cruiser", "battleship"] },
    engineNumber: { type: Number, min: 1, max: 4 },
    //relationship:
    logId: { type: Schema.Types.ObjectId, ref: "Log" }
})




module.exports = mongoose.model(schemaName, schema)