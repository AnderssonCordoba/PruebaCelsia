import Form from '../models/Form.js'; 

export const registerForm = async (req, res) => {
  try {
    const {numIdentificacion, nombre, apellidos, tipoIdentificacion, estadoCivil, fechaNacimiento, numBeneficiarios, fechaIngreso} = req.body 
    const existingNumID = await Form.findOne({ numIdentificacion });

    if (existingNumID) {
      return res.status(400).json({ message: 'El Numero de Identificación ya se encuentra registrado' });
    }
 
    const form = new Form({ numIdentificacion, nombre, apellidos, tipoIdentificacion, estadoCivil, fechaNacimiento, numBeneficiarios, fechaIngreso});
    await form.save();
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el registro del formulario' });
  }
};
  
export const getAllForms = async (req, res) => {
    try {
      const forms = await Form.find()
      res.json(forms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };