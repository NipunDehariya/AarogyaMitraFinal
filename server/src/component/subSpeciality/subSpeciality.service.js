const AppError = require("../../utils/AppError");
const { catchAsyncError } = require("../../utils/catchAsync");
const subSpecialityModel=require("./subSpeciality.model");
const slugify=require('slugify');
const factory = require('../Handlers/handler.factor');


//to add new subspciality
//عندنا 3 طرق لل insert many-instat save create واحنا استخدمنا save

exports.createSubSpeciality= catchAsyncError(async (req,res) =>{
    const{name , speciality}=req.body;
    let subspeciality= new subSpecialityModel({name ,slug: slugify(name) ,speciality});
    await subspeciality.save();
    //رقم من 3 ارقام والرنج من 100 ل 500
    res.status(200).json(subspeciality);
});

//to get all subspcialities
exports.getSubSpecialities=catchAsyncError(async (req,res) =>{
    let filter={}
    if(req.params.specialityId){
        filter={speciality: req.params.specialityId};
    }

    let subspcialities= subSpecialityModel.find(filter).populate('speciality', 'name -_id')
    res.status(200).json(subspcialities);
}
)

//to get all specific subspciality
exports.getSubSpeciality=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    let subspeciality=await subSpecialityModel.findById(id)
    if(!subspeciality){
      return next(new AppError("subspeciality not found",404));
    }
    res.status(200).json(subspeciality);
})

//to update  specific subspciality
exports.updateSubSpeciality=catchAsyncError(async (req,res,next) =>{
    const {id}=req.params;
    const {name,speciality}=req.body;
    let subspeciality=await subSpecialityModel.findByIdAndUpdate(id,{name,slug:slugify(name),speciality},{new:true});
    if(!subspeciality){
      return next(new AppError("subspeciality not found",404));
    }
    res.status(200).json(subspeciality);
})

//to delete  specific subspciality
exports.deleteSubSpeciality=factory.deleteOne(subSpecialityModel)