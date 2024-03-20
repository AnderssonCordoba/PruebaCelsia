import express from 'express'; 
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig.js'; 
import formRoutes from './routes/formRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import './Database/db.js';

const app = express();
 
// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Ruta para servir la documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Configuración de CORS para permitir acceso desde tu frontend de React
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
app.use(cors(corsOptions));
 

app.use('/forms', formRoutes);  
app.use('/images', imageRoutes);  

// Puerto
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
