import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your_secret_key'
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY') or 'your_jwt_secret_key'  # Clave secreta para JWT
    JWT_ACCESS_TOKEN_EXPIRES = 3600  # 1 hora para la expiración del token
