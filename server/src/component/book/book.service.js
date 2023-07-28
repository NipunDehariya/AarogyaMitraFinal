const AppError = require("../../utils/AppError");
const { catchAsyncError } = require("../../utils/catchAsync");
const doctorModel = require("../doctor/doctor.model");
const bookModel=require("./book.model");
const couponModel=require("../coupon/coupon.model");



function calcTotalBookPrice(book){
    let totalPrice=0;
    book.visitADoctor.forEach((ele)=>{
      totalPrice+=ele.price*ele.quantaty
    })
    book.totalPrice=totalPrice

}

//to add new book and paying off
exports.addToBook= catchAsyncError(async (req,res) =>{
    
    let {price}= await doctorModel.findById(req.body.doctor).select('price')
    req.body.price= price;
    //book an appointment
    let book =await bookModel.findOne({user:req.user._id}).populate('visitADoctor.doctor','price')
    if(!book){
        let newBook=new bookModel({
            visitADoctor:[req.body],
            user:req.user._id,
        })
        calcTotalBookPrice(newBook);
        if( newBook.totalPriceAfterDiscount){
            newBook.totalPriceAfterDiscount=(newBook.totalPrice-(newBook.totalPrice*discount)/100).toFixed(2)
        }
        await newBook.save();
        res.status(200).json({msg:"book created successfully",newBook});
    }else{
      let findDoctor= book.visitADoctor.find((ele)=>ele.doctor==req.body.doctor)
      if(findDoctor){
        findDoctor.quantaty+=1;
      }else{
        book.visitADoctor.push(req.body)
      }

      calcTotalBookPrice(book);
      await book.save();
      res.status(200).json(book);
    }
});


exports.removeDoctorFromBook=catchAsyncError(async(req, res, next)=>{
let book=await bookModel.findOneAndUpdate({user:req.user._id},
    {$pull:{visitADoctor:{_id:req.body.bookId}}},{new:true})
    calcTotalBookPrice(book);
    if( book.totalPriceAfterDiscount){
        book.totalPriceAfterDiscount=(book.totalPrice-(book.totalPrice*discount)/100).toFixed(2)
    }
    await book.save();
    !book && next( new AppError("book not found",400));
    !book && res.status(200).json(book);


})

exports.applyCoupon=catchAsyncError(async(req, res, next)=>{

    let {code, discount}= await couponModel.findOne({code:req.body.code, expires:{$gt:Date.now()}})
    if(!code) return next(new AppError("coupon not found or expired"));
    let book=await bookModel.findOne({user:req.user._id})
    book.totalPriceAfterDiscount=(book.totalPrice-(book.totalPrice*discount)/100).toFixed(2)
    book.discount=coupon.discount 


    await book.save();
    res.status(200).json({book});  
})

exports.getUserBook=catchAsyncError(async (req,res) =>{
    let book=await bookModel.findOne({user:req.user._id})
    res.status(200).json({result:book.visitADoctor.length,book:book.visitADoctor});
});