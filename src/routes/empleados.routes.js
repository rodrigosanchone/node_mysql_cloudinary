import {Router} from 'express'
import { controller } from '../controllers/empleados.controller.js'

const router= Router();

router.post('/empleados',controller.createEmpleado)
router.delete('/empleados/:id',controller.deleteEmpleado)

export default router;