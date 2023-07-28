const { allowedTo, ProtectedRoutes } = require('../user/user.auth')
const { createpayment } = require('./payment.service')
const router=require('express').Router()

router.use(ProtectedRoutes,allowedTo('admin'))

router.route('/').post(createpayment)
router.post('/applyCoupon')



module.exports=router