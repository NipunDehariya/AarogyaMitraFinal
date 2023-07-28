const AppError = require("../../utils/AppError")
const  {catchAsyncError} = require("../../utils/catchAsync")
const { compare  ,  hash } = require("bcrypt");
const {  sign , verify } = require("jsonwebtoken");
const adminModel = require("./admin.model");



const signIn = catchAsyncError(async (req, res, next) => {
  let admin = await adminModel.findOne({ name: req.body.name });

  if (!admin || !(await compare(req.body._id, admin._id)))
  {  
    return next(new AppError('incorrect name or id', 401))
  }
  let token = sign({ name: admin.name , id : admin._id }, process.env.JWT_KEY);
  res.status(200).json({ token });
});




const ProtectedRoutes = catchAsyncError(async (req, res, next) => {
  let token = req.headers.token;
  if (!token) return next(new AppError("token not provided", 401));
  let decoded = await verify(token, process.env.JWT_KEY)
  let admin = await adminModel.findById(decoded.userId)
  if (!admin) return next(new AppError("admin not provided", 401));
  req.admin = admin
  next();

})


//Authorization
function allowedTo(...roles) {
  return catchAsyncError(async (req, res, next) => {
    if (!roles.includes(req.admin.role))
      return next(new AppError("you are not authorized to acces this route", 401));
    next();
  })
}

module.exports = {
  allowedTo,
  signIn,
  ProtectedRoutes
}