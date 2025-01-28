# Usa una imagen base de Java
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia el JAR generado al contenedor desde la ubicación correcta
COPY backend/calendarioModule/target/calendarioModule-0.0.1-SNAPSHOT.jar app.jar

# Exponde el puerto que usa Spring Boot
EXPOSE 9000

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]