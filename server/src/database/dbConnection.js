

//حل stack overflow
// mongoose.connect("mongodb://localhost:27017/pulse", {useNewUrlParser: true});
// mongoose.set('strictQuery', true);

const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv")
mongoose.set('strictQuery', true);
dotenv.config()
module.exports.dbConnection=   ()=>{
    mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
        console.log('db connection successful')
    }).catch((err)=>{
        console.log(err, 'db connection failed');
    })
} 