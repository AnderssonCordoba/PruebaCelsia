import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'; 

import { registerForm, getForms, registerImage } from '../utils/formApi';  

const FormsContext = createContext();

const FormsProvider = ({ children }) => {  

    const [loading, setLoading] = useState(false); 

    const getFormsList = async () => {
        try {
            const response = await getForms()
            if (response && response.statusText === 'OK') {
                console.log("response: ",response.data)
                return response.data
            }
        } catch (error) {
            console.log("error", error)
            return 'error'
        }
            
        setLoading(false);
    }
    

    const saveForm = async (data) => {
        setLoading(true);
        if (data) {
        try {
            // Realiza la solicitud de registro
            const response = await registerForm(data);

            if (response && response.statusText === 'OK') {
            setLoading(false);
            return <Navigate to="/" />;
            
            }
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
        }
    };

    const saveImage = async (data) => {
        setLoading(true);
        if (data) {
        try { 
            const response = await registerImage(data);

            if (response && response.statusText === 'OK') {
            setLoading(false);
            return <Navigate to="/" />;
            
            }
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
         
    }, [])

    const values = {  
        setLoading,
        saveForm,
        getFormsList,
        saveImage,

    }

    return (
        <FormsContext.Provider value={values}>
        {children}
        </FormsContext.Provider>
    );
};

export const useForm = () => {
    return useContext(FormsContext);
};

export default FormsProvider;