import { body } from 'express-validator'; 

// Middleware para validar los campos de entrada
const validateFields = [
  body('numIdentificacion').notEmpty(),
  body('nombre').notEmpty(),
  body('apellidos').notEmpty(),
  body('tipoIdentificacion').notEmpty(),
  body('estadoCivil').notEmpty(),
  body('fechaNacimiento').notEmpty(),
  body('numBeneficiarios').notEmpty(),
  body('fechaIngreso').notEmpty()
];

export default validateFields;
