# SportBoard Docker Setup

# Configuración Docker para SportBoard

## Comandos Básicos
- **Construir Imágenes:** `make build`
- **Levantar Contenedores:** `make up`
- **Detener Contenedores:** `make down`

## Estructura del Directorio
- **`Dockerfile`:** Definición de la imagen Docker para cada servicio.
- **`docker-compose.yml`:** Configuración global para los servicios del proyecto.

## Buenas Prácticas
- Usar nombres consistentes: `sportboard-<servicio>`.
- Mantener el archivo `.dockerignore` actualizado.
- Evitar incluir archivos innecesarios en las imágenes.
