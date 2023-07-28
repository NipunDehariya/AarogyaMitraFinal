const { Schema, model, type, Types } = require('mongoose');
const schema = Schema({
    type: {
        type: String,
        // required:true,
        trim: true,

    },
    day: String,
    start: Number,
    end: Number,
    doctorId: {
        type: Types.ObjectId,
        ref: 'doctor',
    },

}, { timestamps: true })


module.exports = model('schedule', schema)