const AppError = require("../../utils/AppError");
const { catchAsyncError } = require("../../utils/catchAsync");
const doctorModel=require("./doctor.model");
const slugify=require('slugify');
const factory = require('../Handlers/handler.factor');
const ApiFeatures = require("../../utils/ApiFeatures");




exports.createdoctor= catchAsyncError(async (req,res) =>{
    req.body.slug=slugify(req.body.name);
    req.body.image=req.file?.filename;
    let doctor= new doctorModel(req.body);
    await doctor.save();
    //رقم من 3 ارقام والرنج من 100 ل 500
    res.status(200).json(doctor);
});

//to get all doctors
exports.getdoctors=catchAsyncError(async (req,res) =>{
      
    let  apiFeatures=new ApiFeatures(doctorModel.find({}),req.query).paginate().fields().filter().sort().search();
    let doctors=await apiFeatures.mongooseQuery;
    res.status(200).json({page:apiFeatures.page,doctors});
});

//to get all specific doctor
exports.getdoctor=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    let doctor=await doctorModel.findById(id)
    if(!doctor){
      return next(new AppError("doctor not found",404));
    }
    res.status(200).json(doctor);
})

//to update  specific doctor
exports.updatedoctor=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
  
   if(req.body.name){
    req.body.slug=slugify(req.body.name);
    
   }
   req.body.image=req.file?.filename;
    let doctor=await doctorModel.findByIdAndUpdate(id,req.body,{new:true});
    if(!doctor){
      return next(new AppError("doctor not found",404));
    }
    res.status(200).json(doctor);
})

//to delete  specific doctor
exports.deletedoctor=factory.deleteOne(doctorModel)