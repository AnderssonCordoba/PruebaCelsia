import React from 'react'
import { useForm, Controller } from 'react-hook-form' 
import { useForm as useFormu } from '../../../context/formsContext'

const FormData = () => {

  const {saveForm} = useFormu()
  const {register, reset, handleSubmit, control, formState:{errors}, watch } = useForm({
    defaultValues:{
      numIdentificacion:  " ",
      nombres:            " ",
      apellidos:          " ",
      tipoIdentificacion: " ",
      estadoCivil:        " ",
      fechaNacimiento:    " ",
      numBeneficiarios:   " ",
      fechaIngreso:       " ",
    }
  });
 
 
  const onSubmit = (data) =>{
    console.log(data)
    saveForm(data);
    localStorage.setItem('data', JSON.stringify(data))
    reset();

  }
  return ( 
      <div style={Styles.formsContainer}> 
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Formulario de Registro</h1>
         <div style={Styles.formGroup}>
            <label >Número de indentificación</label>
            <input type='number'  className="form-control"  
              {
                ...register('numIdentificacion',{
                    required:"este campo es obigatorio",
                    minLength: 5,
                })
              } 
            /> 
          </div> 
          
          <div style={Styles.formGroup}>
             <label >nombres</label>
             <input type='text'  className="form-control" 
               {
                 ...register('nombres',{
                     required:"este campo es obigatorio",
                     maxLength: 30,
                     minLength: 5,
                 })
               } 
             /> 
           </div> 
          
          <div style={Styles.formGroup}>
             <label >apellidos</label>
             <input type='text'  className="form-control" 
               {
                 ...register('apellidos',{
                     required:"este campo es obigatorio",
                     maxLength: 30,
                     minLength: 5,
                 })
               } 
             />  
           </div> 
           
           <div style={Styles.formGroup}>
              <label >Tipo de identificación</label>
              <Controller
                name="tipoIdentificacion" 
                control={control} 
                render={({ field }) => (
                  <select {...field}>
                    <option value="">SELECCIONE UN TIPO</option>
                    <option value="CC">CEDULA DE CIUDADANIA </option>
                    <option value="TI">TARJETA DE IDENTIDAD</option> 
                    <option value="CE">CEDULA DE EXTRANJERIA</option>
                    <option value="RC">REGISTRO CIVIL</option> 
                  </select>
                  
                )}
              />
              {errors.tipoIdentificacion && (
                <p style={{ color: 'red' }}>{errors.tipoIdentificacion.message}</p>
              )}
            </div>
          
          <div style={Styles.formGroup}>
             <label >Fecha nacimiento</label>
             <input type='date'  className="form-control" 
               {
                 ...register('fechaNacimiento',{
                     required:"este campo es obigatorio"
                 })
               } 
             /> 
           </div> 
           
           <div style={Styles.formGroup}>
              <label >Estado civil</label>
              <Controller
                name="estadoCivil" 
                control={control} 
                render={({ field }) => (
                  <select {...field}>
                    <option value="">SELECCIONE UN ESTADO</option>
                    <option value="1">SOLTERO</option>
                    <option value="2">CASADO</option> 
                    <option value="3">UNION LIBRE</option> 
                  </select>
                )}
              />
            </div>
          
          <div style={Styles.formGroup}>
             <label >Número de beneficiarios</label>
             <input type='number'  className="form-control" 
               {
                 ...register('numBeneficiarios',{
                     required:"este campo es obigatorio",
                     minLength: 1,
                 })
               } 
             /> 
           </div> 
          
          <div style={Styles.formGroup}>
             <label >Fecha de ingreso</label>
             <input type='date' className="form-control"  
               {
                 ...register('fechaIngreso',{
                     required:"este campo es obigatorio"
                 })
               } 
             /> 
           </div> 
           
          <button type='submit'>Siguiente</button>
        </form> 
          
      </div> 
  )
}

const Styles ={ 
  formsContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formGroup:{
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  formCol:{
    display: 'flex',
    flexDirection: 'row',
  }
  
}
export default FormData
