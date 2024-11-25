const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (req, res) => {
  try {
    const { username } = req.body;

    // Validar el nombre de usuario
    if (!username || username !== process.env.AUTH_USERNAME) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    // Definir el payload para el token
    const payload = { username }; // Información que irá en el token

    // Generar el token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.error('Error al generar el token:', error.message);
    return res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

module.exports = { generateToken };
