from flask import Blueprint, jsonify, request

api = Blueprint('api', __name__)

# Aquí irán los endpoints de las APIs
@api.route('/api/partidos', methods=['GET'])
def get_partidos():
    return jsonify({"message": "Lista de partidos", "data": []})

# Endpoint de ejemplo
@api.route('/api/partidos', methods=['POST'])
def create_partido():
    data = request.json
    if not data:
        return jsonify({"error": "No se enviaron datos"}), 400
    return jsonify({"message": "Partido creado", "data": data}), 201


#Para agarrar de base de datos:
"""engine = create_engine('oracle://user:password@host:port/sid')

@api.route('/api/partidos', methods=['GET'])
def get_partidos():
    with engine.connect() as conn:
        result = conn.execute("SELECT * FROM partidos").fetchall()
        partidos = [dict(row) for row in result]
    return jsonify({"message": "Lista de partidos", "data": partidos})"""