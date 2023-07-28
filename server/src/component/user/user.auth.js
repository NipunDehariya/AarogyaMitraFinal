const AppError = require("../../utils/AppError")
const { catchAsyncError } = require("../../utils/catchAsync")
const { compare, hash } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const {generateToken} = require("../../utils/generateAndVerigyToken.js")
const userModel = require("./user.model");

 

const signUp = async (req, res,next) => {
  console.log(req.body);
  let isUser = await userModel.findOne({ email: req.body.email });
  if (isUser) {
    return next(new AppError('user already exists', 400));
  }
  let User = new userModel(req.body);
  await User.save();
  console.log({ User });
  return res.status(200).json({ message:'success',User });
};

const signIn = async (req, res, next) => {
  console.log(req.body);
  const { email , password} = req.body;
  console.log(req.body);
  let user = await userModel.findOne({ email });

  if (!user) {
    
    return next(new AppError('incorrect email or password', 400))
  }
  let token = sign({ email , password: user.password , id:user._id }, process.env.JWT_KEY);

  res.status(200).json({ message:'success', token });
};

const ProtectedRoutes = catchAsyncError(async (req, res, next) => {
  let token = req.headers.token;
  if (!token) return next(new AppError("token not provided", 401));

  let decoded =  verify(token, process.env.JWT_KEY)

  let user = await userModel.findById(decoded.id)
  if (!user) return next(new AppError("user not provided", 401));

  if (user.passwordChangedAt) {
    let changePassword = parseInt(user.passwordChangedAt.getTime() / 1000)
    if (changePassword > decoded.iat)
      return next(new AppError("Password changed", 401));

  }

  req.user = user
  next();

})


//Authorization
function allowedTo(...roles) {
  return catchAsyncError(async (req, res, next) => {
    if (!roles.includes(req.user.role))
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