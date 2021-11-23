const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true },
    theme: { type: String, required: true },
    idOwner: { type: Number, required: true },
    likes: { type: Number, required: true },
    tags: { type: String, required: true},
    text: { type: String, required: true, unique: true },
    authMark: { type: Number, required: true},
    comments: { type: Array, required: true},
    avgUsersMark: { type: Array, required: true},
    imgS: { type: Array, required: true }
})
module.exports = model('Review', schema)