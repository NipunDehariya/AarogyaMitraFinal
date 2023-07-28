const AppError = require("../../utils/AppError");
const { catchAsyncError } = require("../../utils/catchAsync");
const scheduleModel=require("./schedule.model");
const factory = require('../Handlers/handler.factor');



exports.addSchedule= catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    let document=await scheduleModel.findById(id);
    if(!document){
      return next(new AppError("document not found",400));
    }
    res.status(200).json({result:document});
})

exports.updateSchedule= catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    let document=await scheduleModel.findByIdAndUpdate(id);
    if(!document){
      return next(new AppError("document not found",404));
    }
    res.status(200).json({result:document});
})



//to delete  specific doctor
exports.deleteSchedule=factory.deleteOne(scheduleModel)