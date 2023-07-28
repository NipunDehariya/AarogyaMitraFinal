const { allowedTo, ProtectedRoutes } = require('../user/user.auth')
const { addToWishList, removeFromWishList, getUserWishList } = require('./wishList.service')

const router=require('express').Router()
router.use(ProtectedRoutes,allowedTo('user'))

router.route('/').patch(addToWishList).delete(removeFromWishList).get(getUserWishList)


module.exports=router