const AppError = require("../../utils/AppError");
const { catchAsyncError } = require("../../utils/catchAsync");
const SpecialityModel=require("./speciality.model");
const slugify=require('slugify');
const factory = require('../Handlers/handler.factor');


//to add new spcialities
//عندنا 3 طرق لل insert many-instat save create واحنا استخدمنا save

exports.createSpeciality= catchAsyncError(async (req,res) =>{
    req.body.slug=slugify(req.body.name);
    req.body.image=req.file?.filename;
    let speciality= new SpecialityModel(req.body);
    await speciality.save();
    //رقم من 3 ارقام والرنج من 100 ل 500
    res.status(200).json(speciality);
});

//to get all spcialities
exports.getSpecialities=catchAsyncError(async (req,res) =>{
    let spcialities= SpecialityModel.find({})
    res.status(200).json(spcialities);
}
)

//to get all specific spcialitiy
exports.getSpeciality=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    let speciality=await SpecialityModel.findById(id)
    if(!spciality){
      return next(new AppError("spectiality not found",404));
    }
    res.status(200).json(speciality);
})

//to update  specific spcialitiy
exports.updateSpeciality=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    req.body.slug=slugify(req.body.name);
    req.body.image=req.file?.filename;
    let speciality=await SpecialityModel.findByIdAndUpdate(id,req.body,{new:true});
    if(!spciality){
      return next(new AppError("spectiality not found",404));
    }
    res.status(200).json(speciality);
})

//to delete  specific spcialitiy
exports.deleteSpeciality=factory.deleteOne(SpecialityModel)