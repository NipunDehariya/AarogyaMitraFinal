const {Schema,model,type, Types}=require('mongoose');
const schema=Schema({
    userId:{
        type:Types.ObjectId,
        ref:'user',
    },
    consultation:[{
        doctor:{
            type:Types.ObjectId,
            ref:'doctor',
        },
        unitPrice:{
            type:Number,

        },
        quantaty:{
            type:Number,
            default:1,

        },
        totalPrice:{
            type: Number,
            default:1,
        },
    }],
    address:{
        type:String,
        required:[true,"address is required"]
    
    },
    phone:{
        type:String,
        required:[true,"phone is required"]
    
    },
    paymentMethod:{
        type:String,
        default:"cash",
        enum:["cash", "vise"],
    },
    couponId:{
        type:Types.ObjectId,
        ref:"coupon",
    },
    sumTotal:{
        type: Number,
        default:1,

    },
    totalPrice:{
        type: Number,
        default:1,
    },
    status:{
        type:String,
        default:"ReservationDone",
        enum:['ReservationDone', 'cancel'],
    },

 

},{timestamps:true})
module.exports=model('payment',schema)