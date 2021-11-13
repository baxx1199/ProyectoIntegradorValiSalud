const {Schema, model} = require('mongoose')

const diabetesRegisterSchema = new Schema(
    {
        blood_glucose: {type: Number, required: true},
        time_last_meal:{type:Number}
    },
    {
        timestamps:true,
        versionKey: false
    }
);

module.exports = model('DiabetesRegister',  diabetesRegisterSchema);