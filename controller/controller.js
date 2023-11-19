const app = require('./../app');
const morgan =require('morgan')
const personsData = require('./../persons');
const PhoneBook = require('./../mongo')

 const getPeople = (req, res) => {
    try {
        const person = personsData;
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
 const deletePerson = (req, res) => {
        try {
        const id = Number(req.params.id);
        const person = personsData.filter(person => person.id === id);

        res.json({
            status:'Success'
        })

        } catch (error) {
            
        }
}
 const getPerson = (req, res) => {
        try {
            const id = Number(req.params.id)
  
            const person = personsData.find(person => person.id === id);
        
            res.json({
                status:"success",
                person
            })
        } catch (error) {
            
        }
}
 const createPerson = (req, res, next) => {
    try {

       
       
       
        const person = new PhoneBook(req.body);

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