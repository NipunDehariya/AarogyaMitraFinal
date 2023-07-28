const {createSpeciality,getSpecialities, getSpeciality, updateSpeciality, deleteSpeciality}=require('./speciality.service');
const subspcialityRoute=require('../subSpeciality/subSpeciality.api');
const { uploadSingleFile } = require('../../utils/fileUpload');
const { ProtectedRoutes, allowedTo } = require('../user/user.auth');
const router=require('express').Router()


router.use("/:specialityId/subspecialities",subspcialityRoute)
router.route('/').post(ProtectedRoutes,allowedTo('admin'),uploadSingleFile('image', 'speciality'),createSpeciality).get(getSpecialities)
router.route('/:id').get(getSpeciality).put(ProtectedRoutes,allowedTo('admin'),uploadSingleFile('image', 'speciality'),updateSpeciality).delete(ProtectedRoutes,allowedTo('admin'),deleteSpeciality)


module.exports=router