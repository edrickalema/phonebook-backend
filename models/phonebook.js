const mongoose = require('mongoose')

const phoneSchema = mongoose.Schema({
    name: String,
    number:String
})

phoneSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const PhoneBook = mongoose.model('PhoneBook', phoneSchema);

module.exports = PhoneBook;