const AppError = require("../../utils/appError");
const { catchAsyncError } = require("../../utils/catchAsync");
const couponModel=require("./coupon.model");
const factory = require('../Handlers/handler.factor');

//to add new coupon
//عندنا 3 طرق لل insert many-instat save create واحنا استخدمنا save

exports.createcoupon= catchAsyncError(async (req,res) =>{
    let coupon= new couponModel(req.body);
    await coupon.save();
    res.status(200).json(coupon);
});

//to get all coupons
exports.getcoupons=catchAsyncError(async (req,res) =>{
    let coupons=await couponModel.find({})
    res.status(200).json({coupons});
});

//to get all specific coupon
exports.getcoupon=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    let coupon=await couponModel.findById(id)
    !coupon && next( new AppError("coupon not found",400));
    !coupon && res.status(200).json(coupon);
    res.status(200).json(coupon);
})

//to update  specific coupon
exports.updatecoupon=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    let coupon=await couponModel.findByIdAndUpdate(id,req.body,{new:true});
    !coupon && next( new AppError("coupon not found",400));
    coupon && res.status(200).json(coupon);
  
 


})

//to delete  specific coupon
exports.deletecoupon=factory.deleteOne(couponModel)