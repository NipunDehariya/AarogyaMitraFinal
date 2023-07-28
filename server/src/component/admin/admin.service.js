const  AppError = require ("../../utils/AppError");
const  { catchAsyncError } = require ("../../utils/catchAsync");
const  { deleteOne } = require ('../Handlers/handler.factor');
const  userModel = require( "../user/user.model");
const  doctorModel = require( "../doctor/doctor.model");


exports.addDoctor= catchAsyncError(async (req,res,next) =>{
        const {id}=req.params;
        let document=await doctorModel.insertMany(id);
        if(!document){
          return next(new AppError("document not found",404));
        }
        res.status(200).json({result:document});
    })

exports.deleteuser=deleteOne(userModel)