const app = require('./../app');
const morgan =require('morgan')
const personsData = require('./../persons');
const PhoneBook = require('../models/phonebook')

 const getPeople = async (req, res) => {
    try {
        const person = await PhoneBook.find({});
        res.json({
            status:'Success',
            person
        })
    } catch (error) {
        res.json({
            message:error.message
        })
    }
}
 const deletePerson = async (req, res) => {
        try {
        const id = req.params.id;
        const person = await PhoneBook.findByIdAndDelete(id);

        res.json({
            status:'Success',
            person
        })

        } catch (error) {
            
        }
}
 const getPerson = async (req, res, next) => {
        try {
            const id = req.params.id
  
            await PhoneBook.findById(id).then(person => {
                if(person) {
                    res.json({
                        status:"success",
                        person
                    })
                }else {
                    res.status(404).end()
                }
            });
        } catch(error) {
            next(error)
        }
}
 const createPerson = async  (req, res, next) => {
    try {

        const person = await new PhoneBook({
            name:req.body.name,
            number:req.body.number
        });

        person.save().then(res => console.log(res))

        const {name, number} = person;

        morgan.token('host', (req, res) => {
          return req.hostname + req.body
        })

        person.id = Math.trunc(Math.random() * 100);
        res.json({
            status:'Success',
            name, 
            number
        })
    } catch (e) {
        
    }
}

// FOR HOMEPAGE ONLY
const homePage = (req, res) => {
    try {
        res.send(`<h1>Phone book has information for ${personsData.length} peoples</h1> \n <p>${new Date()}</p>`)
    } catch(e) {}
}

module.exports = {
    getPeople,getPerson,createPerson,deletePerson, homePage
}