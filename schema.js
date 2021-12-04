const mongoose = require('mongoose')
const {Schema} = mongoose

const dataSchema = new Schema({
    Book: String,
    Name: String,
    Date: String
});

module.exports = mongoose.model('data', dataSchema, 'dataSchema');