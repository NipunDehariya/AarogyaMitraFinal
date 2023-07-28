const AppError = require("../../utils/AppError");
const { catchAsyncError } = require("../../utils/catchAsync");
const slugify=require('slugify');




exports.deleteOne=(Model)=>{
    return catchAsyncError(async (req,res,next) =>{
        const {id}=req.params;
        let document=await Model.findByIdAndDelete(id);
        if(!document){
          return next(new AppError("document not found",404));
        }
        res.status(200).json({result:document});
    })
}