/* Establece las rutas a las que se puede acceder y asigna la accion correspondiente que 
se realizara al acceder a dicha ruta, las acciones estan definidas e importadas desde los controladores
 */
const { Router } = require('express');
const router = Router();

const diabetesController = require('../controller/diabetes.controller')

router.get('/', diabetesController.getDiabetes)
router.post('/', diabetesController.createRegister)
router.put('/:id', diabetesController.editRegister)
router.delete('/:id',diabetesController.deleteRegister)

module.exports = router;