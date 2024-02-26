const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv")
mongoose.set('strictQuery', true);
dotenv.config()
module.exports.dbConnection=   ()=>{
    mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
        console.log('DB connection successful 😊')
    }).catch((err)=>{
        console.log(err, 'DB connection failed 😢');
    })
}