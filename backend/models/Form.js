import mongoose from 'mongoose';  

const formSchema = new mongoose.Schema({
    numIdentificacion: {type: Number, require: true},
    nombre: {type: String, require: true},
    apellidos: {type: String, require: true},
    tipoIdentificacion: {type: String, require: true},
    estadoCivil: {type: Number, require: true},
    fechaNacimiento: {type: Date, require: true},
    numBeneficiarios: {type: Number, require: true, default:0},
    fechaIngreso: {type: Date, require: true}, 
});

export default mongoose.model('Form', formSchema);
