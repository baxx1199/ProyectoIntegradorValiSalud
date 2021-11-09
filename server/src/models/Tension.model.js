const {Schema, model} = require('mongoose')

const tensionRegisterSchema = new Schema(
    {
        systolic: {type: Number, required: true},
        diastolic: {type: Number, required: true},
        pulse: {type: Number, required: false}
    },
    {
        timestamps:true,
        versionKey: false
    }
);

module.exports = model('TensionRegister',  tensionRegisterSchema);