require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./src/models/db');

// Importar rutas
const estadisticasRoutes = require('./src/routes/estadisticasRoutes');

// Importar middlewares
const validateAndSaveToken = require('./src/middlewares/tokenMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:4200',
}));
app.use(express.json());
 


// Conectar a la base de datos
connectToDatabase()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');

    // Usar middleware y rutas
    app.use(validateAndSaveToken);
    app.use('/api/estadisticas', estadisticasRoutes);

    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
