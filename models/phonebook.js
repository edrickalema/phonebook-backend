const mongoose = require('mongoose')

const phoneSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    minLength: 3
  },
  number:{
    required: true,
    type: String,
    minLength: 8,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v)
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
})

phoneSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const PhoneBook = mongoose.model('PhoneBook', phoneSchema)

module.exports = PhoneBook