const fs = require('fs');
const path = require('path');

// Ruta al archivo donde se guardarán los tokens
const tokenDir = path.join(__dirname, '../utils/data');
const tokenFilePath = path.join(tokenDir, 'tokens.json');

// Crear el directorio si no existe
if (!fs.existsSync(tokenDir)) {
  fs.mkdirSync(tokenDir, { recursive: true });
}

// Crear el archivo tokens.json si no existe
if (!fs.existsSync(tokenFilePath)) {
  fs.writeFileSync(tokenFilePath, JSON.stringify([]), 'utf8');
}

// Middleware para validar y guardar tokens
const validateAndSaveToken = (req, res, next) => {
  const token = req.headers['authorization'];
  
  console.log('Token recibido:', token);  // Log para verificar el token recibido

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token no proporcionado',
    });
  }

  const bearerToken = token.startsWith('Bearer ') ? token.slice(7) : token;

  try {
    const tokens = JSON.parse(fs.readFileSync(tokenFilePath, 'utf8'));
    const existingToken = tokens.find((t) => t.token === bearerToken);

    if (!existingToken) {
      const newToken = {
        token: bearerToken,
        isValid: true,
        createdAt: new Date().toISOString(),
      };

      tokens.push(newToken);
      fs.writeFileSync(tokenFilePath, JSON.stringify(tokens, null, 2), 'utf8');
      console.log('Nuevo token guardado:', bearerToken);
    } else {
      console.log('Token ya existe.');
    }

    next();
  } catch (error) {
    console.error('Error al procesar el token:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al procesar el token',
    });
  }
};


module.exports = validateAndSaveToken;
