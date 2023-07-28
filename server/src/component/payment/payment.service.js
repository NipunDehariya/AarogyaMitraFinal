const AppError = require("../../utils/AppError");//
const { catchAsyncError } = require("../../utils/catchAsync");//
const paymentModel=require("./payment.model");//
const couponModel = require("../coupon/coupon.model");
const doctorModel = require("../doctor/doctor.model");

exports.createpayment= catchAsyncError(async (req,res) =>{

    const {couponId,consultation}=req.body;
    const {_id}=req.user
    const finalList=[]
    let sumTotal=0;
    for(let i=0; i<consultation.length;){
        const checkDoctor=await findOne({
            model:doctorModel,
            filter:{_id:consultation[i].doctor_id, stock:{$gte:consultation[i].quantaty}}
        })
        if(!checkDoctor){
            return next(new AppError("invalid",409));

        }
        consultation[i].unitPrice.checkDoctor.price
        consultation[i].totalPrice=(checkDoctor.price*consultation[i].quantaty)
        sumTotal += consultation[i].totalPrice
        finalList.push(consultation[i])
    }
    req.body.sumTotal=sumTotal
    req.body.totalPrice=sumTotal
    if(couponId){
        const checkCoupon= await findOne({
            model:couponModel,
            filter:{_id:couponId , usedBy :{$nin:_id}}

        })
        if(!checkCoupon){
            return next(new AppError("invalid coupon",409));
        }
        req.body.totalPrice=sumTotal-(sumTotal*checkCoupon.amount/100)
    }

    req.body.userId=_id
    req.body.consultation=finalList
    const payment= await create({
        model:paymentModel,
        data:req.body
    })
    if (payment) {
        if(couponId){
            await findByIdAndUpdate({
                model:couponModel,
                filter:couponId,
                data:{ $addToSet:{usedBy:_id} }

            })
        }
        return res.status(201).json({msg:"Done",payment})
        
    } else {
        return next(new AppError("fail your payment",400));
    }
});

