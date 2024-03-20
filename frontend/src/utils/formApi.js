import axios from 'axios';
import env from 'react-dotenv';

const baseUrl = 'http://localhost:3001';
 
export const registerForm = async (data) => {
  try {
    return await axios.post(`${baseUrl}/forms/register`, data);
  } catch (e) {
    console.log(e);
  }
};

export const getForms = async (data) => {
  try {
    return await axios.post(`${baseUrl}/forms/`, data);
  } catch (e) {
    console.log(e);
  }
}

export const registerImage = async (data) => {
    try {
      return await axios.post(`${baseUrl}/images/register`, data);
    } catch (e) {
      console.log(e);
    }
  };
  