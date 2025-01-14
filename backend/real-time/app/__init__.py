from flask import Flask

def create_app():
    app = Flask(__name__)
    
    # Configuración
    app.config['DEBUG'] = True  # Cambia a False en producción
    app.config['SQLALCHEMY_DATABASE_URI'] = 'oracle://user:password@host:port/sid'
    
    # Importa las rutas
    from .routes import api
    app.register_blueprint(api)

    return app
