const {Schema,model,type, Types}=require('mongoose');
const schema=Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:[2,'short name']
    },
    doctorId:{
        type:Types.ObjectId,
        ref:'doctor',
    },
    slug:{
        type:String,
        lowercase:true,
    },
    image:String,

},{timestamps:true})
schema.post('init',(doc)=>{
    doc.image="http://localhost:3000/speciality/"+doc.image;
  })
module.exports=model('speciality',schema)