const { uploadSingleFile } = require('../../utils/fileUpload')
const { allowedTo, ProtectedRoutes } = require('../user/user.auth')
const { changePassword } = require('../user/user.service')
const { signUp, signIn } = require('./doctor.auth')
const { createdoctor, getdoctors, getdoctor, updatedoctor, deletedoctor } = require('./doctor.service')


const router=require('express').Router()

router.route('/').post(ProtectedRoutes,allowedTo('admin'),uploadSingleFile('image','doctor'),createdoctor).get(getdoctors)
router.route('/:id').get(getdoctor).put(ProtectedRoutes,allowedTo('admin'),uploadSingleFile('image','doctor'),updatedoctor).delete(ProtectedRoutes,allowedTo('admin'),deletedoctor)
router.post('/signUp',signUp)
router.post('/signIn',signIn)
router.patch('/changePassword/:id',changePassword)

exports.doctorRouter = router ;
