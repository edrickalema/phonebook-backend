const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app')
dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE_URI.replace('<PASSWORD>', process.env.DB_PASSWORD);
console.log(DB)
mongoose.set('strictQuery', false);

mongoose.connect(DB).then(res=>console.log('Connected to DB')).catch((err) => console.log(err.message))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("App is running at port 5000")
})
