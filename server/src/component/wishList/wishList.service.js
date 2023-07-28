const AppError = require("../../utils/AppError");
const { catchAsyncError } = require("../../utils/catchAsync");
const userModel=require("../user/user.model");



exports.addToWishList=catchAsyncError(async (req,res,next) =>{
  
    let {wishList}=await userModel.findByIdAndUpdate(req.user._id,{
        $addToSet:{wishList:req.body.doctor}
    },{new:true});
    !wishList && next( new AppError("wishList not found",400));
    !wishList && res.status(200).json(wishList);
 
})


exports.removeFromWishList=catchAsyncError(async (req,res,next) =>{
  
    let {wishList}=await userModel.findByIdAndUpdate(req.user._id,{
        $pull:{wishList:req.body.doctor}
    },{new:true});
    !wishList && next( new AppError("wishList not found",400));
    !wishList && res.status(200).json(wishList);
 
})

exports.getUserWishList=catchAsyncError(async (req,res,next) =>{
    let {wishList} =await userModel.findById(req.user._id,)
    if(!wishList) return  next( new AppError("wishList not found",400))
    wishList && res.status(200).json(wishList);
  
   
})