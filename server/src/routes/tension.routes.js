/* Establece las rutas a las que se puede acceder y asigna la accion correspondiente que 
se realizara al acceder a dicha ruta, las acciones estan definidas e importadas desde los controladores
 */
const { Router } = require('express');
const router = Router();

const tensionController = require('../controller/tension.controller')

router.get('/', tensionController.getTension)
router.post('/', tensionController.createRegister)
router.put('/:id', tensionController.editRegister)
router.delete('/:id',tensionController.deleteRegister)

module.exports = router;