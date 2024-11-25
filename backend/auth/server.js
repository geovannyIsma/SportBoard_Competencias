require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Usar las rutas de autenticación
app.use('/auth', authRoutes);

const PORT = process.env.AUTH_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servicio de autenticación corriendo en http://localhost:${PORT}`);
});
