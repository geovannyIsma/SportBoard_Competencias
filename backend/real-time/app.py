from flask import Flask
from flask_jwt_extended import JWTManager
from auth import auth_bp  # Importa el Blueprint de autenticación

app = Flask(__name__)
app.config.from_object('config.Config')

# Inicializar JWT
jwt = JWTManager(app)

# Registrar el Blueprint para la autenticación
app.register_blueprint(auth_bp, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)
