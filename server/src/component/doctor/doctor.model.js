const { Schema, model, type, Types } = require('mongoose');
const schema = Schema({
  firstName: String,
  lastName: String,
  userName: {
    type: String,
    required: true,
    trim: true
  },
  
  medicalId: {
    type: Types.ObjectId,
    type: Number,
    unique: true,
    ref: 'doctor',
    required : true ,
  },
  phone: String,
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "minlength 6 charchter"]
  },
  slug: {
    type: String,
    lowercase: true,
  },
  ratingAvarage: {
    type: Number,
    min: [1, "rating avarage must be grater than 1"],
    min: [5, "rating avarage must be less than 5"],
  },
  ratingCount: {
    type: Number,
    default: 0,
  },
  bookings: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  spectiality: {
    type: String,
     required: true,
  },
   image: String,
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})

//فيلد وهمي بضيفه للدكتور ومش بيتخزن فالداتا بيز
schema.virtual("reviews", {
  ref: "review",
  localField: "_id",
  foreignField: "doctor",
})

schema.pre("findOne", function () {
  this.populate([{
    path: "reviews",
    select: "name",
    Option: { limit: 1 },
  }])
})



schema.post('init', (doc) => {
  doc.image = "http://localhost:3000/doctor/" + doc.image;
})
//other solution
// schema.post('init',(doc)=>{
//   if(doc.images){
//     doc.image="http://localhost:3000/doctor/"+doc.image;
//   }

// })
module.exports = model('doctor', schema)