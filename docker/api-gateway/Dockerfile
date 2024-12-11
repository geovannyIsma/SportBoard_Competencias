# Usar una imagen base oficial de ASP.NET Core runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Usar una imagen oficial de .NET SDK para construir la aplicación
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
# Copiar el archivo de proyecto y restaurar las dependencias
COPY ["<project_path>/<ProjectName>.csproj", "<project_path>/"]
RUN dotnet restore "<project_path>/<ProjectName>.csproj"
# Copiar el resto de los archivos y construir la aplicación
COPY . .
WORKDIR "/src/<project_path>"
RUN dotnet build "<ProjectName>.csproj" -c Release -o /app/build

# Publicar la aplicación
FROM build AS publish
RUN dotnet publish "<ProjectName>.csproj" -c Release -o /app/publish

# Crear la imagen final basada en la imagen runtime
FROM base AS final
WORKDIR /app
# Copiar los archivos publicados desde la etapa de publicación
COPY --from=publish /app/publish .
# Configurar el punto de entrada para ejecutar la aplicación
ENTRYPOINT ["dotnet", "<ProjectName>.dll"]
