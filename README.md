# Proyecto Arquitectura Hexagonal - API con Autenticación y MongoDB

Este proyecto es una implementación de una API basada en la **Arquitectura Hexagonal** utilizando Node.js, Express.js, MongoDB, JWT, bcrypt y Passport.js para la autenticación.

## Características

- **Autenticación JWT**: Autenticación basada en tokens para usuarios locales.
- **Autenticación con Google**: Integración con Google OAuth 2.0 para inicio de sesión con terceros.
- **Encriptación de Contraseñas**: Uso de bcrypt para almacenar contraseñas de forma segura.
- **MongoDB**: Base de datos NoSQL para la persistencia de datos.
- **Arquitectura Hexagonal**: Separación clara entre las capas de dominio, aplicación e infraestructura.
- **Seguridad**: Implementación de HTTPS para asegurar las comunicaciones.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) v14 o superior
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- **Certificados SSL** si deseas correr en HTTPS (Opcional para desarrollo).

## Instalación

### 1. Clonar el Repositorio

Clona el repositorio del proyecto en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-proyecto.git
cd tu-proyecto
```

### 2. Instalar Dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

### 3. Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto utilizando el archivo `.env.template` como guía. Deberás agregar las variables necesarias, como las credenciales de Google OAuth y los detalles de la base de datos MongoDB.

```bash
cp .env.template .env
```

Modifica el archivo `.env` con los siguientes valores:

```env
# Configuración de Express
EXPRESS_PORT=3000
EXPRESS_HOST="localhost"
EXPRESS_EXPIRE="1h"
EXPRESS_STATIC="./public"

# Configuración de Google para autenticación
GOOGLE_CLIENT_ID="tu-google-client-id"
GOOGLE_CLIENT_SECRET="tu-google-client-secret"
GOOGLE_CALLBACK_URL="https://localhost:3000/auth/google/callback"

# Configuración de MongoDB
MONGO_ACCESS="mongodb+srv://"
MONGO_USER="tu-usuario"
MONGO_PWD="tu-contraseña"
MONGO_HOST="tu-host.mongodb.net"
MONGO_PORT=27017
MONGO_DB_NAME="nombre_de_tu_base_de_datos"

# Llave secreta para JWT
KEY_SECRET="tu-secreto-jwt"
```

### 4. Ejecutar la Aplicación

Una vez configuradas las variables de entorno, puedes ejecutar la aplicación en modo de desarrollo:

```bash
npm run dev
```

### 5. Acceder a la Aplicación

La aplicación estará disponible en `https://localhost:3000`. Si has configurado correctamente el certificado SSL, deberías poder acceder de forma segura.

## Estructura del Proyecto

Este proyecto sigue la **Arquitectura Hexagonal**, separando la lógica de la aplicación en capas independientes:

- **application**: Controladores, middlewares, servicios y rutas.
- **domain**: Modelos y repositorios que representan la lógica de negocio.
- **infrastructure**: Conexiones externas, como bases de datos y autenticación de terceros.
- **server**: Configuración del servidor (Express, HTTPS, middlewares de seguridad).

  ```
  .
  ├── application       # Lógica de la aplicación y controladores
  │   ├── controllers   # Controladores para manejar las peticiones
  │   ├── middlewares   # Middlewares de Express.js
  │   ├── routes        # Definición de las rutas
  │   ├── services      # Servicios de negocio de la aplicación
  │   └── src           # Código fuente adicional
  │       └── validator # Validadores de datos
  ├── domain            # Lógica de negocio y modelos
  │   ├── models        # Modelos que representan las entidades del dominio
  │   └── repositories  # Repositorios para la persistencia de datos
  ├── infrastructure    # Infraestructura y conexión con servicios externos
  │   ├── database      # Configuración y conexión a la base de datos MongoDB
  │   ├── middlewares   # Middlewares relacionados con la infraestructura
  │   └── server        # Configuración del servidor Express.js y HTTPS
  ├── node_modules      # Módulos y dependencias instaladas con npm
  ├── .env              # Variables de entorno del proyecto (no se sube al repo)
  ├── .env.template     # Plantilla para las variables de entorno
  ├── .gitignore        # Archivos y directorios que deben ser ignorados por Git
  ├── app.js            # Archivo principal de entrada de la aplicación
  ├── certificate.crt   # Certificado SSL
  ├── certificate.csr   # Solicitud de firma de certificado
  ├── package-lock.json # Archivo de bloqueo de versiones de dependencias
  ├── package.json      # Declaración de dependencias y scripts del proyecto
  ├── private.key       # Llave privada para HTTPS
  └── README.md         # Archivo de documentación del proyecto

  ```

## Scripts Disponibles

- **`npm run dev`**: Inicia el servidor en modo desarrollo.

## Tecnologías Utilizadas

- **Node.js** y **Express.js** para el backend.
- **MongoDB** como base de datos.
- **JWT** para la autenticación basada en tokens.
- **bcrypt** para la encriptación de contraseñas.
- **Passport.js** para la autenticación con Google.
- **HTTPS** para asegurar las comunicaciones.
