const {Schema,model,type, Types}=require('mongoose');
const schema=Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:[2,'short name']
    },
    // doctorId:{
    //     type:Types.ObjectId,
    //     ref:'doctor',
    // },
    slug:{
        type:String,
        lowercase:true,
    },
    speciality:{
        type:Types.ObjectId,
        ref:'speciality',
       
    }
    

},{timestamps:true})


module.exports=model('subSpeciality',schema)