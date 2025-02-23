# @guiurm/event-driver

## Enlaces

- [📋 Requisitos](#requisitos)
- [⚙️ Instalación del paquete](#instalacion)
- [📚 Guía de la API](#guia)

    - [🏷️ Clases](#guia-clases)
        - [🔍 Ejemplos](#guia-clases-ejemplos)
            - [AbsEventListener](#guia-clases-ejemplos-event-listener)
            - [Subscriber](#guia-clases-ejemplos-subscriber)
    - [🔠 Tipos](#guia-tipos)

El paquete **@guiurm/event-driver** es un componente esencial dentro de la arquitectura de monorepo deguiurm\*@guiurm/foundation\*\*. Proporciona una infraestructura para la gestión de eventos en aplicaciones complejas y escalables.

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
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#event-driver
        ```

    - **Versión Específica:**

        Para instalar una **versión específica**, reemplace `[version]` con el número de **versión** deseado y utilice:

        ```bash
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#event-driver-[version]
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

| Clase              | Descripción                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `AbsEventListener` | Clase base abstracta para crear oyentes de eventos. Permite crear instancias para gestionar eventos de manera genérica. |
| `Subscriber`       | Clase para gestionar la suscripción a eventos, permitiendo suscribir y desuscribirse de eventos en tiempo de ejecución. |

<a id="guia-clases-ejemplos"></a>

#### 🔍 Ejemplos

<a id="guia-clases-ejemplos-event-listener"></a>

1. **AbsEventListener**

    ```typescript
    /**
     * Example of use
     */

    interface MyEvents {
        onClick: (x: number, y: number) => void;
        onResize: (width: number, height: number) => void;
    }

    class MyListener extends AbsEventListener<MyEvents> {
        constructor() {
            super();
        }
    }

    const listener = new MyListener();
    listener.on("onClick", (x, y) => console.log(`Click at ${x}, ${y}`));
    listener.on("onResize", (width, height) => console.log(`Resize to ${width}x${height}`));
    listener.onAny((...args) => console.log("Any event", args));
    listener.dispatch("onClick", 10, 20);
    listener.dispatch("onResize", 500, 500);
    listener.clearEvents("onClick");
    ```

<a id="guia-clases-ejemplos-subscriber"></a>

2. **Subscriber**

    ```typescript
    /**
     * Ejemplo de uso de Subscriber con una funcion callback simple
     */
    {
        const subscriber = new Subscriber<(message: string) => void>();
        subscriber.subscribe((message) => console.log(message));
        subscriber.distpach("Hola mundo!");
        // Salida: Hola mundo!
    }

    /**
     * Ejemplo de uso de Subscriber con multiples funciones callback
     */
    {
        const subscriber = new Subscriber<(name: string, age: number) => void>();
        subscriber.subscribe((name, age) => console.log(`Soy ${name}, tengo ${age} a os`));
        subscriber.subscribe((name, age) => console.log(`Me llamo ${name} y nac  hace ${age} a os`));
        subscriber.distpach("Pedro", 25);
        // Salida:
        // Soy Pedro, tengo 25 a os
        // Me llamo Pedro y nac  hace 25 a os
    }
    ```

<a id="guia-tipos"></a>

### 🔠 Tipos

Estos tipos se utilizan para definir la forma de los eventos y las funciones que los manejan.

| Tipo           | Uso                                                                                     |
| -------------- | --------------------------------------------------------------------------------------- |
| `EventType`    | Define los tipos de eventos que pueden ser manejados.                                   |
| `ListenerType` | Especifica la forma de las funciones que actúan como oyentes de eventos.                |
| `CallbackType` | Representa la firma de las funciones de retorno que se ejecutan en respuesta a eventos. |
