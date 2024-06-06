# API Generadora de Respuestas

Este proyecto es una API que recibe un mensaje (prompt) y una clave API de OpenAI para generar una respuesta utilizando el modelo GPT-3.5-turbo.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Yarn](https://yarnpkg.com/) (versión 1.22.10 o superior)

## Configuración del Proyecto

1. Clona este repositorio en tu máquina local:

    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2. Navega hasta el directorio del proyecto:

    ```sh
    cd tu-repositorio
    ```

3. Crea un archivo `.env` en la raíz del proyecto y configura el puerto que deseas usar:

    ```env
    PORT={tu puerto}
    ```

## Instalación de Dependencias

Para instalar las dependencias necesarias, ejecuta el siguiente comando:

```sh
yarn
```

## Ejecución del Proyecto

Para iniciar el servidor en modo de desarrollo, utiliza el siguiente comando:

```sh
yarn run dev
```

El servidor se iniciará en el puerto especificado en tu archivo .env.

## Uso de la API
### Ruta: `/generate-response`

Método: `POST`

### Descripción:

Esta ruta recibe un JSON con un mensaje (`prompt`) y una clave API de OpenAI (`api_key`) y devuelve una respuesta generada por el modelo GPT-3.5-turbo.

### Request:

    URL: `http://localhost:{tu puerto}/generate-response`

    Headers: 
    
        `Content-Type: application/json`

    Body:

        {
            "prompt": "{tu mensaje}",
            "api_key": "{tu api key de openai}"
        }

### Response:

    Success (200):

        { 
            "generatedText": "tu respuesta" 
        }

    Error (400):
        { 
            error: "El prompt es obligatorio" 
        }

        o
        
        { 
            error: "El prompt es obligatorio" 
        }

### Ejemplo de Uso

Aquí tienes un ejemplo de cómo realizar una solicitud a la API usando `curl`:

```sh
curl -X POST http://localhost:{tu puerto}/generate-response \
     -H "Content-Type: application/json" \
     -d '{
           "prompt": "cuéntame un chiste",
           "api_key": "tu-api-key-de-openai"
         }'
```