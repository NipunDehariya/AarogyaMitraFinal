const {Schema,model,type, Types}=require('mongoose');
const schema=Schema({
    medicalRecId:{
        type:Types.ObjectId,
        ref:'patiant',
    },
    result:String,
    diagnoses:String,
    treatment:String,

})
module.exports=model('medicalRec',schema)