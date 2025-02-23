# @guiurm/api-connector

## Enlaces

- [📋 Requisitos](#requisitos)
- [⚙️ Instalación del paquete](#instalacion)
- [📚 Guía de la API](#guia)
    - [🏷️ Clases](#guia-clases)
    - [🔧 Utilidades](#guia-utilidades)

El paquete **@guiurm/api-connector** se encarga de proporcionar una capa de abstracción para la creación de conectores de APIs. Este paquete se enfoca en proveer una API simple y eficiente para crear conectores de APIs, y en proveer una compatibilidad total con los estándares de **TypeScript**. El objetivo principal de este paquete es permitir a los desarrolladores crear conectores de APIs de manera rápida y sencilla, sin la necesidad de preocuparse por la implementación de los detalles de la comunicación con la API.

<a id="requisitos"></a>

## 📋 Requisitos

Para utilizar este paquete, se requiere cumplir con los mismos requisitos que para el proyecto raiz, por lo que se recomienda consultar la sección de [Requisitos](../../README.md#requisitos) en el archivo README.md de la raiz del proyecto.

<a id="instalacion"></a>

## ⚙️ Instalación del paquete

Este paquete es parte del monorepo **@guiurm/foundation**, por lo que se puede instalar de manera independiente o como parte del paquete global. Para instalar este paquete de manera independiente, siga los siguientes pasos:

1. **Instalación del Paquete:**

    Utilice **npm** para instalar el paquete directamente desde la URL proporcionada. Puede optar por instalar la **_última versión_** o una **_versión específica_**:

    - **Última Versión:**

        Para instalar siempre la última versión del paquete, use el siguiente comando que accede a la rama `subtree`:

        ```bash
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#api-connector
        ```

    - **Versión Específica:**

        Para instalar una **versión específica**, reemplace `[version]` con el número de **versión** deseado y utilice:

        ```bash
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#api-connector-[version]
        ```

    Esto le permitirá trabajar con la versión exacta que necesite.

2. **Instalación de Dependencias:**

    Después de seleccionar la versión adecuada, instale las dependencias necesarias ejecutando:

    ```bash
    npm install
    ```

    Esto garantizará que todas las dependencias del proyecto estén disponibles.

<a id="guia"></a>

## 📚 Guía de la API

La siguiente sección describe los diferentes componentes y utilidades que se encuentran en la librería, junto con sus métodos, propiedades y ejemplos de uso.

<a id="guia-clases"></a>

### 🏷️ Clases

| Clase               | Descripción                                                                                                                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ApiConnectorError` | Representa errores durante la ejecución de peticiones HTTP. Extiende la clase Error y añade dos propiedades: `axiosError` (error de tipo AxiosError) y `axiosResponse` (respuesta de tipo AxiosResponse). |

<a id="guia-utilidades"></a>

### 🔧 Utilidades

| Utilidad             | Descripción                                            |
| -------------------- | ------------------------------------------------------ |
| `defineApiConnector` | Crea una instancia de ApiConnectorService.             |
| `get`                | Realiza un pedido GET y devuelve la respuesta HTTP.    |
| `post`               | Realiza un pedido POST y devuelve la respuesta HTTP.   |
| `put`                | Realiza un pedido PUT y devuelve la respuesta HTTP.    |
| `patch`              | Realiza un pedido PATCH y devuelve la respuesta HTTP.  |
| `del`                | Realiza un pedido DELETE y devuelve la respuesta HTTP. |

---

<a id="guia-utilidades-ejemplos"></a>

#### 🔍 Ejemplos

1.  Ejemplo de uso para `defineApiConnector`.

    De esta forma la configuracion inicial se mantendría para todas las peticiones

    ```typescript
    // Example of use
    const api = defineApiConnector({
        baseURL: "https://api.yourdomain.com/",
        timeout: 10000,
        // By default, this validates the status code to be between 200 and 400.
        validateStatus: validResponseValidator,
    });

    // Example of use with a generic response type
    interface User {
        id: number;
        name: string;
        email: string;
    }

    api.get<User>("user/1")
        // en este caso el valor de response seria de tipo Pokemon automaticamente
        .then((response) => console.log(response))
        .catch((error: ApiConnectorError) => console.error(error));

    // Example of use with a generic response type
    interface UserList {
        count: number;
        next: string | null;
        previous: string | null;
        results: Array<{ name: string; url: string }>;
    }

    api.get<UserList>("user")
        // en este caso el valor de response seria de tipo Pokemon automaticamente
        .then((response) => console.log(response))
        .catch((error: ApiConnectorError) => console.error(error));

    api.post<UserList>("user", { name: "test", email: "test@test.com" })
        // en este caso el valor de response seria de tipo PokemonList automaticamente
        .then((response) => console.log(response))
        .catch((error: ApiConnectorError) => console.error(error));

    api.put<UserList>("user/1", { name: "test", email: "test@test.com" })
        // en este caso el valor de response seria de tipo PokemonList automaticamente
        .then((response) => console.log(response))
        .catch((error: ApiConnectorError) => console.error(error));

    api.patch<UserList>("user/1", { name: "test", email: "test@test.com" })
        // en este caso el valor de response seria de tipo PokemonList automaticamente
        .then((response) => console.log(response))
        .catch((error: ApiConnectorError) => console.error(error));

    api.del<UserList>("user/1")
        // en este caso el valor de response seria de tipo PokemonList automaticamente
        .then((response) => console.log(response))
        .catch((error: ApiConnectorError) => console.error(error));
    ```

2.  Usando peticiones instantaneas sin configurar una base

    Para usarlo basta con importarlo de la siguiente forma:

    ```typescript
    import { del, get, patch, post, put } from "@guiurm/api-connector";
    ```

    - GET

    ```typescript
    const getExample = async () => {
        interface GetResponse {
            id: number;
            name: string;
        }

        const url: TValidUrl = "https://api.example.com/resource/1";

        try {
            const response = await get<GetResponse>(url);
            console.log("GET Response:", response);
        } catch (error) {
            console.error("GET Error:", error);
        }
    };
    ```

    - POST

    ```typescript
    const postExample = async () => {
        interface PostResponse {
            id: number;
            name: string;
        }

        const url: TValidUrl = "https://api.example.com/resource";
        const data = { name: "Example" };

        try {
            const response = await post<PostResponse>(url, data);
            console.log("POST Response:", response);
        } catch (error) {
            console.error("POST Error:", error);
        }
    };
    ```

    - PUT

    ```typescript
    const putExample = async () => {
        interface PutResponse {
            success: boolean;
        }

        const url: TValidUrl = "https://api.example.com/resource/1";
        const data = { name: "Updated Example" };

        try {
            const response = await put<PutResponse>(url, data);
            console.log("PUT Response:", response);
        } catch (error) {
            console.error("PUT Error:", error);
        }
    };
    ```

    - PATCH

    ```typescript
    const patchExample = async () => {
        interface PatchResponse {
            success: boolean;
        }

        const url: TValidUrl = "https://api.example.com/resource/1";
        const data = { name: "Updated Example" };

        try {
            const response = await patch<PatchResponse>(url, data);
            console.log("PATCH Response:", response);
        } catch (error) {
            console.error("PATCH Error:", error);
        }
    };
    ```

    - DELETE

    ```typescript
    const deleteExample = async () => {
        const url: TValidUrl = "https://api.example.com/resource/1";

        try {
            await del(url);
            console.log("DELETE Success");
        } catch (error) {
            console.error("DELETE Error:", error);
        }
    };
    ```
