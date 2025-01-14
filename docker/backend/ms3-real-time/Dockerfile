# Imagen base de Python
FROM python:3.9-slim

# Instalar dependencias del sistema necesarias para cx_Oracle
RUN apt-get update && apt-get install -y libaio1 && rm -rf /var/lib/apt/lists/*

# Crear el directorio de trabajo
WORKDIR /app

# Instalar las dependencias de Python
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código de la aplicación
COPY . /app/

# Exponer el puerto en el que Flask corre
EXPOSE 5000

# Comando para iniciar Flask
CMD ["flask", "run", "--host=0.0.0.0"]
#CMD ["python", "wsgi.py"] #Ya para Flask
