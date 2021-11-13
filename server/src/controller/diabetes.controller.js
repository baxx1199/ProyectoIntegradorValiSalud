/* definicion de las operaciones basicas de la API REST,
    DiabetesController hace referencia a un objeto controlador el cual contendra los metodos CRUD
    diabetesRegister importa el modelo definido para la creacion de un registro de diabetes
*/

const diabetesController = {}; 

const DiabetesRegister = require('../models/Diabtes.model')

diabetesController.getDiabetes = async(req, res)=> {
    const registersDiabetes = await DiabetesRegister.find()
    res.json(registersDiabetes)
}

diabetesController.createRegister = async(req, res) =>{

    const newRegisterDiabetes = new diabetesRegister(req.body);
    await newRegisterDiabetes.save();
    res.send('create New Register')
}


diabetesController.editRegister = async(req, res)=> {
     await diabetesRegister.findByIdAndUpdate(req.params.id, req.body)

     res.json({status: 'register Updated'})
}

diabetesController.deleteRegister = async(req, res)=>{
    await diabetesRegister.findByIdAndDelete(req.params.id);
    res.json({status: 'register Deleted'})
}

module.exports=diabetesController;