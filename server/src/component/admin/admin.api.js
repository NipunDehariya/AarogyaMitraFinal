const { ProtectedRoutes, allowedTo } = require('./admin.auth')
const {addDoctor, deleteuser } = require('./admin.service')
const {signIn } = require('./admin.auth.js')


const router=require('express').Router()

router.route('/').post(ProtectedRoutes,allowedTo('admin'),addDoctor).delete(ProtectedRoutes,allowedTo('admin'),deleteuser)
router.post('/signIn',signIn)
module.exports = router;
// exports.userRouter = router  ;