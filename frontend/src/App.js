import './App.css'; 
import FormsProvider from './context/formsContext';
import { router } from './router'
import { RouterProvider } from 'react-router-dom';
 

function App() { 
  return (
    <FormsProvider>
      <RouterProvider router={router} /> 
    </FormsProvider>
  );
}

export default App;
