const { allowedTo, ProtectedRoutes } = require('../user/user.auth')
const { addToBook, removeDoctorFromBook, applyCoupon, getUserBook } = require('./book.service')
const router=require('express').Router()

router.use(ProtectedRoutes,allowedTo('user'))

router.route('/').post(addToBook).delete(removeDoctorFromBook).get(getUserBook)
router.post('/applyCoupon',applyCoupon)



module.exports=router