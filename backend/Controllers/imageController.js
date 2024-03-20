import Image from '../models/Image.js'; 

export const registerImage= async (req, res) => {
  try {
    const {numIdentificacion, nombreImagen, fecha, } = req.body 
    const existingNumID = await Image.findOne({ numIdentificacion });

    if (!existingNumID) {
      return res.status(400).json({ message: 'El Numero de Identificación no existe' });
    }
 
    const Image = new Image({ numIdentificacion, nombreImagen, fecha });
    await Image.save();
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el registro de la imagen' });
  }
};
 
 

export const getAllForms = async (req, res) => {
    try {
      const Images = await Image.find().populate('Form')
      res.json(Images);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };