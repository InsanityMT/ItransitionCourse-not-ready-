const {Schema, model} = require('mongoose')

const schema = new Schema({
    mark: { type: Number, required: true },
    idReview: { type: Number, required: true },
    idOwner: { type: Number, required: true }
})

module.exports = model('Mark', schema)