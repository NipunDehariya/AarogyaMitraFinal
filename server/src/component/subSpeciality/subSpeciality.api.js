const { ProtectedRoutes, allowedTo } = require('../user/user.auth')
const {createSubSpeciality, getSubSpecialities, getSubSpeciality, updateSubSpeciality, deleteSubSpeciality}=require('./subSpeciality.service')
//h merge(دمج) parent pram w hygbha fe child pram
const router=require('express').Router({mergeParams:true})

router.route('/').post(ProtectedRoutes,allowedTo('admin'),createSubSpeciality).get(getSubSpecialities)
router.route('/:id').get(getSubSpeciality).put(ProtectedRoutes,allowedTo('admin'),updateSubSpeciality).delete(ProtectedRoutes,allowedTo('admin'),deleteSubSpeciality)


module.exports=router