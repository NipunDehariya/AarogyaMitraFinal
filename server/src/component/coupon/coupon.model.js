const {Schema,model,type, Types}=require('mongoose');
const schema=Schema({
    code:{
        type:String,
        required:true,
        trim:true,
    },
   expires:{
    type:Date,
   },

   discount:{
    type:Number

   },

},{timestamps:true})


module.exports=model('coupon',schema)