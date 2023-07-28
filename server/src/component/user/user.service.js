const  AppError = require ("../../utils/AppError");
const  { catchAsyncError } = require ("../../utils/catchAsync");
const  userModel = require( "./user.model");
const  slugify = require ('slugify');
const  { deleteOne } = require ('../Handlers/handler.factor');



exports.createUser= catchAsyncError(async (req,res, next) =>{
    let isUser= userModel.findOne({email:req.body.email})
    if(isUser) return next(new AppError('email already exists',401) )
    let user= new userModel(req.body);
    await user.save();
    //رقم من 3 ارقام والرنج من 100 ل 500
    res.status(200).json(user);
});
exports.getUsers=catchAsyncError(async (req,res) =>{
    let users=await userModel.find({})
    res.status(200).json({users});
})
  exports.getUser=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    let user=await userModel.findById(id)
    !user && next( new AppError("user not found",400));
    !user && res.status(200).json(user);

})
exports.updateuser=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
  
    let user=await userModel.findByIdAndUpdate(id,req.body,{new:true});
    !user && next( new AppError("user not found",400));
    !user && res.status(200).json(user);
})
exports.changePassword=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    req.body.passwordChangedAt=Date.now
    let user=await userModel.findByIdAndUpdate(id,req.body,{new:true});
    !user && next( new AppError("user not found",400));
    !user && res.status(200).json(user);
})
exports.deleteUser=deleteOne(userModel)