const AppError = require("../../utils/AppError")
const  {catchAsyncError} = require("../../utils/catchAsync")
const { compare  ,  hash } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");

const doctorModel = require("./doctor.model");



const signUp = async (req, res , next) => {

  console.log(req.body);

  let isdoctor = await doctorModel.findOne({ email: req.body.email });
  if (isdoctor){
    return next(new AppError('doctor already exists', 400)) ;
  } 
  let doctor = new doctorModel(req.body);

  await doctor.save();
  console.log({ doctor });
  return res.status(200).json({ message:'success', doctor });
};

const signIn = catchAsyncError(async (req, res, next) => {

  console.log(req.body);

  const { email } = req.body;
  console.log(req.body);
  let doctor = await doctorModel.findOne({ email });


  if (!doctor)
  {  
     return next(new AppError('incorrect email or password', 400))
  }
  let token = sign({ doctorName: doctor.doctorName , password : doctor.password }, process.env.JWT_KEY);
  
  res.status(200).json({ message:'success', token });
});

const ProtectedRoutes = catchAsyncError(async (req, res, next) => {
  let token = req.headers.token;
  if (!token) return next(new AppError("token not provided", 401));

  let decoded = await verify(token, process.env.JWT_KEY)

  let doctor = await doctorModel.findById(decoded.doctorId)
  if (!doctor) return next(new AppError("doctor not provided", 401));

  if (doctor.passwordChangedAt) {
    let changePassword = parseInt(doctor.passwordChangedAt.getTime() / 1000)
    if (changePassword > decoded.iat)
      return next(new AppError("Password changed", 401));

  }

  req.doctor = doctor
  next();

})


//Authorization
function allowedTo(...roles) {
  return catchAsyncError(async (req, res, next) => {
    if (!roles.includes(req.doctor.role))
      return next(new AppError("you are not authorized to acces this route", 401));
    next();


  })
}

module.exports = {
  allowedTo,
  signIn,
  signUp,
  ProtectedRoutes

}