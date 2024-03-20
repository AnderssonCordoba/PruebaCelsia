import express from 'express';
import { registerForm } from '../Controllers/formController.js';
import validateFields from '../middlewares/validationMiddleware.js';

const router = express.Router();
 
/**
 * @swagger
 * /forms/register:
 *   post:
 *     summary: Registrar un nuevo formulario
 *     tags:
 *       - Forms
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numIdentificacion:
 *                 type: number
 *               nombre:
 *                 type: string
 *               apellidos:
 *                 type: string
 *               tipoIdentificacion:
 *                 type: string
 *               estadoCivil:
 *                 type: number
 *               fechaNacimiento:
 *                 type: date
 *               numBeneficiarios:
 *                 type: number
 *               fechaIngreso:
 *                 type: date 
 *     responses:
 *       200:
 *         description: formulario registrado con éxito
 *       400:
 *         description: Error en los datos de entrada
 */
router.post('/forms', validateFields, registerForm);

export default router;
