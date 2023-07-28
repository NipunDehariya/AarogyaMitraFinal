const {Schema,model,type, Types}=require('mongoose');
const schema=Schema({
    visitADoctor:[{
        doctor:{
            type:Types.ObjectId,
            ref:'doctor',
        },
        quantaty:{
            type:Number,
            default:1,

        },
        price:Number,
    }],
    user:{
        type:Types.ObjectId,
        ref:'user',
    },
    totalPrice:Number,
    totalPriceAfterDiscount:Number,
    discount:Number,
 

},{timestamps:true})
module.exports=model('book',schema)