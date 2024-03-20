import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import FormImage from './components/FormImage';
import FormData from './components/FormData';

const FormsPage = () => {
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
    
  }

  return ( 
      <div style={Styles.formsContainer}> 
        <FormData/>
        <FormImage/>
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
export default FormsPage
