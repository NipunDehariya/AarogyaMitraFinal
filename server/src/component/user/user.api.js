const { signUp, signIn } = require('./user.auth')
const { createUser, getUsers, getUser, updateuser, deleteUser, changePassword } = require('./user.service')

const router=require('express').Router()

router.route('/').post(createUser).get(getUsers)
router.route('/:id').get(getUser).put(updateuser).delete(deleteUser)
router.patch('/changePassword/:id',changePassword)
router.post('/signUp',signUp)
router.post('/signIn',signIn)

exports.userRouter = router  ;