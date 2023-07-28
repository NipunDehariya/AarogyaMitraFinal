const { allowedTo, ProtectedRoutes } = require('../user/user.auth')
const { createcoupon, getcoupons, getcoupon, updatecoupon, deletecoupon } = require('./coupon.service')
const router=require('express').Router()

router.use(ProtectedRoutes,allowedTo('admin'))

router.route('/').post(createcoupon).get(getcoupons)
router.route('/:id').get(getcoupon).put(updatecoupon).delete(deletecoupon)


module.exports=router