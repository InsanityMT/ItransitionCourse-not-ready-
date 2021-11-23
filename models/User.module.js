const {Schema, model} = require('mongoose')

const schema = new Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    role: { type: String, required: true },
    status: { type: String,  required: true },
    language: { type: String, required: true },
    theme: { type: String, required: true },
    img: { type: Array, required: true}
})

module.exports = model('User', schema)