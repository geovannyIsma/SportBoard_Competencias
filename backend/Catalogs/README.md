# Catálogos de SportBoard

Este proyecto es parte del backend de SportBoard y maneja los catálogos y grupos de catálogos.

## Requisitos

- .NET Core 3.1 o superior

## Configuración

1. Clona el repositorio:

## Endpoints

### Grupos

*  `GET /api/groups`: Obtiene todos los grupos.
*  `GET /api/groups/{code}`: Obtiene un grupo por su código.
*  `POST /api/groups`: Crea un nuevo grupo.
*  `PUT /api/groups/{code}`: Actualiza un grupo existente.
*  `DELETE /api/groups/{code}`: Elimina un grupo por su código.


### Catálogos

*  `GET /api/catalogs`: Obtiene todos los catálogos.
*  `GET /api/catalogs/{id}`: Obtiene un catálogo por su ID.
*  `GET /api/catalogs/group/{group-code}`: Obtiene los catálogos por el código del grupo.
*  `POST /api/catalogs`: Crea un nuevo catálogo.
*  `PUT /api/catalogs/{id}`: Actualiza un catálogo existente.
*  `DELETE /api/catalogs/{id}`: Elimina un catálogo por su ID.

## Documentación

La documentación completa de la API está disponible en Swagger. Puedes acceder a ella en la siguiente URL después de iniciar el proyecto:

[Documentación Swagger](http://localhost:5000/swagger)

## Convenciones de Nomenclatura

En C#, se utiliza PascalCase para nombrar clases, métodos y propiedades. PascalCase es una convención de nomenclatura en la que la primera letra de cada palabra en una identificación compuesta se escribe con mayúscula, por ejemplo, `NombreDeClase` o `MetodoEjemplo`.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.