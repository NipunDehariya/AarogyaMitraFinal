const multer  = require('multer');
const AppError = require('./appError');


exports.uploadSingleFile=(fieldName,folderName)=>{

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `uploads/${folderName}`)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }

  })

  function fileFilter (req, file, cb) {
    if(req.file.mimetype.startWith('image')){

        cb(null, true)
    }else{
        cb(new AppError("images only",400), null, false)
    }
  }
  
  const upload = multer({ storage, fileFilter })
  return upload.single(fieldName)
}