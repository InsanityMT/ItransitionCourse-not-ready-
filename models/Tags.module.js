const { model, Schema} = require("mongoose")

const tagSchema = new Schema({
    name: { type: String, required: true, unique: true},
//    value: { type: Number, required: true },
    reviews: { type: Array, required: true }
})

// const tagModel = model("tags", tagSchema)
// module.exports = tagModel

module.exports = model("tags", tagSchema)
