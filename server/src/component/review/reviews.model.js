const {Schema,model,type, Types}=require('mongoose');
const schema=Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:[1,'too short review'],
    },
    user:{
        type:Types.ObjectId,
        ref:'user',
    },
    doctor:{
        type:Types.ObjectId,
        ref:'doctor',
    },
   ratingAvarage:{
    type:Number,
    min:[1,"rating must be grater than 1"],
    min:[5,"rating must be less than 5"],
   }

},{timestamps:true})

schema.pre(/^find/, function(){
    this.populate('user', 'name')
})

module.exports=model('review',schema)