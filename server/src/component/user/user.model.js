const {Schema,model, Types}=require('mongoose');
const bcrypt = require('bcrypt');
const schema= new Schema({
      firstName: String,
      lastName: String,
    userName:{
      type: String,
      required : true  ,
      trim: true 
    },
    // userId:{
    //     type:Types.ObjectId,
    //     ref:'user',
    // },
    date:{
      type: Date,
       default: Date.now ,
    },
  phone:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  role:{
    type:String,
    enum:['admin', 'user'],
    default:"user",

  },
  password:{
    type:String,
    required:true,
    minlength:[6,"minlength 6 charchter"]
  },
  passwordChangedAt:Date,
  isActive:{
    type:Boolean,
    default:true,
  }

},{timestamps:true})

 //hash password by using hooks
schema.pre('save',async function(){
  this.password=await bcrypt.hash(this.password,Number( process.env.ROUND))
})

schema.pre('findOneAndUpdate',async function(){
  this._update.password=await bcrypt.hash(this._update.password,Number( process.env.ROUND))
})

module.exports=model('user',schema)