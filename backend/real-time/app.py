"""from flask import Flask
from flask_jwt_extended import JWTManager
from auth import auth_bp  # Importa el Blueprint de autenticación

app = Flask(__name__)
app.config.from_object('config.Config')

# Inicializar JWT
jwt = JWTManager(app)

# Registrar el Blueprint para la autenticación
app.register_blueprint(auth_bp, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)"""

from flask import Flask, jsonify, request

app = Flask(__name__)

# Lista en memoria para almacenar los partidos creados
partidos = []

@app.route('/api/partidos', methods=['GET'])
def get_partidos():
    return jsonify({"message": "Lista de partidos", "data": partidos}), 200

@app.route('/api/partido', methods=['POST'])
def create_partido():
    data = request.get_json()  # Obtener los datos enviados en el cuerpo de la solicitud
    partido = {
        'nombre': data.get('nombre'),
        'fecha': data.get('fecha'),
        'equipos': data.get('equipos')
    }
    
    # Guardamos el partido en la lista
    partidos.append(partido)
    
    return jsonify({"message": "Partido creado con éxito", "partido": partido}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)


