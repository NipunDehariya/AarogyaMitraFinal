const { Schema, model, Types } = require('mongoose');
const schema = new Schema({


  adminId: {
     type:Number,
    required: true
     
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
 


}, { timestamps: true })

module.exports = model('admin', schema)