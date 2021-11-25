const { model, Schema} = require("mongoose")

const tagSchema = new Schema({
    name: { type: String, required: true, unique: true},
//    value: { type: Number, required: true },
    reviews: { type: Array, required: true }
})



module.exports = model("tags", tagSchema)
