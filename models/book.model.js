const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
  email:{
    type:String
  },
  password:{
    type:String
  }
})

module.exports = mongoose.model('Book', bookSchema)


