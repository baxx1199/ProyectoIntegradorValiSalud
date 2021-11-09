/* definicion de las operaciones basicas de la API REST,
    TensionController hace referencia a un objeto controlador el cual contendra los metodos CRUD
    tensionRegister importa el modelo definido para la creacion de un registro de tension
*/

const tensionController = {}; 

const TensionRegister = require('../models/Tension.model')

tensionController.getTension = async(req, res)=> {
    const registersTension = await TensionRegister.find()
    res.json(registersTension)
}

tensionController.createRegister = async(req, res) =>{

    const newRegisterTension = new TensionRegister(req.body);
    await newRegisterTension.save();
    res.send('create New Register')
}


tensionController.editRegister = async(req, res)=> {
     await TensionRegister.findByIdAndUpdate(req.params.id, req.body)

     res.json({status: 'register Updated'})
}

tensionController.deleteRegister = async(req, res)=>{
    await TensionRegister.findByIdAndDelete(req.params.id);
    res.json({status: 'register Deleted'})
}

module.exports=tensionController;