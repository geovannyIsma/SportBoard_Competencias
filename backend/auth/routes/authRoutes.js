const express = require('express');
const { generateToken } = require('../controllers/authController');
const validateToken = require('../middlewares/jwtMiddleware');
const router = express.Router();

const fetch = require('node-fetch'); 

// Ruta para generar token
router.post('/generate-token', generateToken);

// Ruta protegida: Proxy al backend de estadísticas
router.use('/src', validateToken, async (req, res) => {
  try {
    // Redirigir la solicitud al backend de estadísticas
    const requestOptions = {
      method: req.method,
      headers: { ...req.headers },
    };

    const response = await fetch(`http://localhost:4000${req.originalUrl}`, requestOptions);

    if (!response.ok) {
      return res.status(response.status).json({ success: false, message: 'Error en la solicitud al backend de estadísticas' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error al conectar con estadísticas:', error.message);
    return res.status(500).json({ success: false, message: 'Error interno del servidor', error: error.message });
  }
});

module.exports = router;
