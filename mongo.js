const mongoose = require('mongoose');

const PWD = "vHrVpb5uIXcJZzsH";
const DB = `mongodb+srv://alema:${PWD}@phonebook.ks9wjpu.mongodb.net/`;

const phoneSchema = mongoose.Schema({
    name: String,
    number:String
})

const PhoneBook = mongoose.model('PhoneBook', phoneSchema);


// newBook.save().then(res => {
//     console.log(res)
//     mongoose.connection.close()
// })

mongoose.set('strictQuery', false);
mongoose.connect(DB)

module.exports = PhoneBook;