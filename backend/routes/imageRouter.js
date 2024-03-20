import express from 'express';
import { registerForm } from '../Controllers/formController.js';
import validateFields from '../middlewares/validationMiddleware.js';

const router = express.Router();
 
/**
 * @swagger
 * /images/register:
 *   post:
 *     summary: Registrar una nueva imagen
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
 *               nombreImagen:
 *                 type: string
 *               fecha:
 *                 type: date 
 *     responses:
 *       200:
 *         description: imagen registrada con éxito
 *       400:
 *         description: Error en los datos de entrada
 */
router.post('/image', validateFields, registerForm);

export default router;
