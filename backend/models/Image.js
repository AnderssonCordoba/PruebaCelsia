import mongoose from 'mongoose'; 

const imageSchema = new mongoose.Schema({
    formId:{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Form',
      require: true,
    },
    numIdentificacion: {type: Number, require: true},
    nombreImagen: {type: String, require: true}, 
    fecha: {type: Date, require: true}, 
});
 
export default mongoose.model('Image', imageSchema);
