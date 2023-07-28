const { addSchedule, updateSchedule, deleteSchedule } = require('./schedule.service');


const router=require('express').Router()

router.route('/').post(addSchedule)
router.route('/:id').put(updateSchedule).delete(deleteSchedule)

module.exports = router;
// exports.userRouter = router  ;