const mongoose = require("mongoose") 
const icecreamSchema = mongoose.Schema({ 
 icecream_type: String, 
 size: String, 
 price:Number
}) 
 
module.exports = mongoose.model("icecream", icecreamSchema)