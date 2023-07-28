const {Schema,model,type, Types}=require('mongoose');
const schema=Schema({
    appointment:{
        type:Types.ObjectId,
        ref:'appointment',
    },
    date:{
      type: Date,
       default: Date.now ,
    },

},{timestamps:true})
module.exports=model('appointment',schema)