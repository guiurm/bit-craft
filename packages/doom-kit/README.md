# @guiurm/doom-kit

## Enlaces

- [📋 Requisitos](#requisitos)
- [⚙️ Instalación del paquete](#instalacion)
- [📚 Guía de la API](#guia)

    - [🏷️ Clases](#guia-clases)
        - [🔍 Ejemplos](#guia-clases-ejemplos)
            - [DNode](#guia-clases-ejemplos-dnode)
            - [Subscriber](#guia-clases-ejemplos-subscriber)
            - [DEventManager](#guia-clases-ejemplos-event-manager)
    - [🔧 Utilidades](#guia-utilidades)
        - [dh](#guia-utilidades-ejemplos-dh)
        - [isTransitionEvent](#guia-utilidades-ejemplos-is-transition-event)
        - [isWindowEvent](#guia-utilidades-ejemplos-is-window-event)
        - [getDOMItemSizing](#guia-utilidades-ejemplos-get-dom-item-sizing)
    - [🌍 Globals](#guia-globals)
    - [🌀 Tipos](#guia-tipos)

El paquete **@guiurm/doom-kit** proporciona una colección de herramientas para interactuar y manipular el **DOM**.

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
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#doom-kit
        ```

    - **Versión Específica:**

        Para instalar una **versión específica**, reemplace `[version]` con el número de **versión** deseado y utilice:

        ```bash
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#doom-kit-[version]
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

| Clase           | Descripción                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| `DNode`         | Clase para representar y manipular nodos del DOM de manera eficiente y programática.                   |
| `DNodeInput`    | Extensión de `DNode` diseñada para manejar nodos de entrada, permitiendo operaciones específicas.      |
| `DEventManager` | Gestor de eventos que facilita la asignación y eliminación de oyentes de eventos en elementos del DOM. |

<a id="guia-clases-ejemplos"></a>

#### 🔍 Ejemplos

<a id="guia-clases-ejemplos-dnode"></a>

1.  **DNode**

    ```typescript
    // Example of using the DNode class

    import { DNode } from "@guiurm/doom-kit";

    // Create a new div element
    const divElement = document.createElement("div");

    // Initialize a DNode instance with the div element
    const dNodeInstance = new DNode(divElement, {
        class: ["my-class"],
        style: { color: "blue", backgroundColor: "lightgray" },
    });

    // Set additional properties and styles
    dNodeInstance.setProps({ id: "my-div" });
    dNodeInstance.setStyle({ padding: "10px" });
    dNodeInstance.setClass(["another-class"]);

    // Add text to the div
    dNodeInstance.addNodeText("Hello World!");

    // Append the DNode to the document body
    document.body.appendChild(dNodeInstance.dom);
    ```

<a id="guia-clases-ejemplos-subscriber"></a>

2. **DNodeInput**

    ```typescript
    import { DNodeInput } from "@guiurm/doom-kit";

    const input = new DNodeInput(document.createElement("input"), {
        type: "number",
        value: 5,
        class: ["input", "input--number"],
        style: {
            width: "100px",
        },
    }).setProps({ oninput: () => console.log(input.value) });

    document.body.append(input.dom);
    ```

<a id="guia-clases-ejemplos-event-manager"></a>

3. **DEventManager**

    ```typescript
    import { DEventManager } from "@guiurm/doom-kit";

    // Define a simple event callback
    const handleClick = (event: MouseEvent) => {
        console.log(`Clicked at coordinates (${event.clientX}, ${event.clientY})`);
    };

    // Create an instance of DEventManager
    const eventManager = new DEventManager(document.body);

    // Register the click event listener
    const listenerId = eventManager.on("click", handleClick);

    // Later, you can remove the event listener using the listenerId
    const removed = eventManager.remove("click", listenerId);
    console.log(`Listener removed: ${removed}`);

    // Migrate event listeners to a new target
    const newTarget = document.createElement("div");
    eventManager.migrate(newTarget);

    // Clear all event listeners
    eventManager.clearAll();
    ```

---

<a id="guia-utilidades"></a>

### 🔧 Utilidades

| Clase                | Descripción                                                    |
| -------------------- | -------------------------------------------------------------- |
| `dh`                 | Crea un `DNode` o `DNodeInput`.                                |
| `isInputTag`         | Comprueba si un elemento es un **input** de tipo texto.        |
| `isMobile`           | Comprueba si se está en un **dispositivo móvil**.              |
| `isAnimationEvent`   | Comprueba si un evento es un **evento de animación**.          |
| `isClipboardEvent`   | Comprueba si un evento es un **evento de portapapeles**.       |
| `isCompositionEvent` | Comprueba si un evento es un **evento de composición**.        |
| `isDragAndDropEvent` | Comprueba si un evento es un **evento de arrastrar y soltar**. |
| `isFocusEvent`       | Comprueba si un evento es un **evento de foco**.               |
| `isFormEvent`        | Comprueba si un evento es un **evento de formulario**.         |
| `isKeyboardEvent`    | Comprueba si un evento es un **evento de teclado**.            |
| `isMediaEvent`       | Comprueba si un evento es un **evento de multimedia**.         |
| `isMouseEvent`       | Comprueba si un evento es un **evento de ratón**.              |
| `isPointerEvent`     | Comprueba si un evento es un **evento de puntero**.            |
| `isTouchEvent`       | Comprueba si un evento es un **evento de toque**.              |
| `isTransitionEvent`  | Comprueba si un evento es un **evento de transición**.         |
| `isWindowEvent`      | Comprueba si un evento es un **evento de ventana**.            |
| `getDOMItemSizing`   | Devuelve el tamaño de un elemento en el **DOM**.               |

---

<a id="guia-utilidades-ejemplos"></a>

#### 🔍 Ejemplos

<a id="guia-utilidades-ejemplos-dh"></a>

1.  **dh**

    ```typescript
    import { dh } from "@guiurm/doom-kit";

    // Create a div element with classes and styles
    const divElement = dh("div", {
        class: ["container", "highlight"],
        style: {
            backgroundColor: "lightblue",
            padding: "20px",
        },
    });

    // Create a button element with text and an event listener
    const buttonElement = dh("button", {})
        .innexText("Click Me")
        .setProps({
            onclick: () => alert("Button clicked!"),
        });

    // Append the button to the div
    divElement.append(buttonElement);

    // Append the div to the document body
    document.body.appendChild(divElement.dom);
    ```

2.  DOMSizing

    ```typescript
    import { getDOMItemSizing } from "@guiurm/doom-kit";
    console.log(getDOMItemSizing(document.body)); // TDOMSizing
    ```

3.  Assertions

    ```typescript
    // assertTags
    import {
        isAnimationEvent,
        isClipboardEvent,
        isCompositionEvent,
        isDragAndDropEvent,
        isFocusEvent,
        isFormEvent,
        isKeyboardEvent,
        isMediaEvent,
        isMouseEvent,
        isPointerEvent,
        isTouchEvent,
        isTransitionEvent,
        isWindowEvent,
        isInputTag,
        isMobile,
    } from "@guiurm/doom-kit";

    console.log(isInputTag("text")); // true

    console.log(isMobile()); // true or false based on the device

    console.log(isAnimationEvent(new AnimationEvent("animationstart"))); // Example: true or false
    console.log(isClipboardEvent(new ClipboardEvent("copy"))); // Example: true or false
    console.log(isCompositionEvent(new CompositionEvent("compositionstart"))); // Example: true or false
    console.log(isDragAndDropEvent(new DragEvent("dragstart"))); // Example: true or false
    console.log(isFocusEvent(new FocusEvent("focus"))); // Example: true or false
    console.log(isFormEvent(new Event("submit"))); // Example: true or false
    console.log(isKeyboardEvent(new KeyboardEvent("keydown"))); // Example: true or false
    console.log(isMediaEvent(new Event("play"))); // Example: true or false
    console.log(isMouseEvent(new MouseEvent("click"))); // Example: true or false
    console.log(isPointerEvent(new PointerEvent("pointerdown"))); // Example: true or false
    console.log(isTouchEvent(new TouchEvent("touchstart"))); // Example: true or false
    console.log(isTransitionEvent(new TransitionEvent("transitionstart"))); // Example: true or false
    console.log(isWindowEvent(new Event("resize"))); // Example: true or false
    ```

---

<a id="guia-globals"></a>

### 🌍 Globals

#### Eventos

| Global                 | Tipo       | Descripci n                             |
| ---------------------- | ---------- | --------------------------------------- |
| `ANIMATION_EVENTS`     | `string[]` | Matriz de eventos de animaci n.         |
| `CLIPBOARD_EVENTS`     | `string[]` | Matriz de eventos del portapapeles.     |
| `COMPOSITION_EVENTS`   | `string[]` | Matriz de eventos de composici n.       |
| `DRAG_AND_DROP_EVENTS` | `string[]` | Matriz de eventos de arrastre y soltar. |
| `FOCUS_EVENTS`         | `string[]` | Matriz de eventos de enfoque.           |
| `FORM_EVENTS`          | `string[]` | Matriz de eventos de formulario.        |
| `KEYBOARD_EVENTS`      | `string[]` | Matriz de eventos de teclado.           |
| `MEDIA_EVENTS`         | `string[]` | Matriz de eventos multimedia.           |
| `MOUSE_EVENTS`         | `string[]` | Matriz de eventos de mouse.             |
| `POINTER_EVENTS`       | `string[]` | Matriz de eventos de puntero.           |
| `TOUCH_EVENTS`         | `string[]` | Matriz de eventos de touch.             |
| `TRANSITION_EVENTS`    | `string[]` | Matriz de eventos de transici n.        |
| `WINDOW_EVENTS`        | `string[]` | Matriz de eventos de ventana.           |

#### Input tags

| Global               | Tipo       | Descripci n                                                       |
| -------------------- | ---------- | ----------------------------------------------------------------- |
| `INPUT_BOOLEAN_TAGS` | `string[]` | Arreglo de los tags de entrada que se consideran booleanos.       |
| `INPUT_FILE_TAGS`    | `string[]` | Arreglo de los tags de entrada que se consideran de tipo archivo. |
| `INPUT_NUMBER_TAGS`  | `string[]` | Arreglo de los tags de entrada que se consideran n mericos.       |
| `INPUT_STRING_TAGS`  | `string[]` | Arreglo de los tags de entrada que se consideran de tipo cadena.  |
| `INPUT_TAGS`         | `string[]` | Arreglo de los tags de entrada que se consideran de tipo input.   |

---

<a id="guia-tipos"></a>

### 🔠 Tipos

Estos tipos se utilizan para definir la forma de los eventos y las funciones que los manejan.

| Tipo                       | Uso          | Descripci n                                                               |
| -------------------------- | ------------ | ------------------------------------------------------------------------- |
| `TDOMStyle`                | `DOMStyle`   | Interfaz para representar un objeto de estilo CSS.                        |
| `TDOMCLass`                | `DOMClass`   | Interfaz para representar una clase de CSS.                               |
| `TDOMNodeConstructor`      | `DNode`      | Constructor de la clase `DNode`.                                          |
| `TDOMNodeInputConstructor` | `DNodeInput` | Constructor de la clase `DNodeInput`.                                     |
| `InputTag`                 | `DNodeInput` | Tipo de los possibles tags de entrada (input, textarea, select, etc.).    |
| `TDNodeFromTag`            | `DNode`      | Interfaz para representar un nodo `DNode` creado a partir de un tag.      |
| `THtmlFromTag`             | `DNode`      | Interfaz para representar un nodo `DNode` creado a partir de un tag HTML. |
| `TINPUT_BOOLEAN_TAGS`      | `DNodeInput` | Arreglo de los tags de entrada que se consideran booleanos.               |
| `TINPUT_FILE_TAGS`         | `DNodeInput` | Arreglo de los tags de entrada que se consideran de tipo archivo.         |
| `TINPUT_NUMBER_TAGS`       | `DNodeInput` | Arreglo de los tags de entrada que se consideran n mero.                  |
| `TINPUT_STRING_TAGS`       | `DNodeInput` | Arreglo de los tags de entrada que se consideran string.                  |
| `TINPUT_TAGS`              | `DNodeInput` | Arreglo de los tags de entrada que se consideran de tipo gen rico.        |
| `TInputBoolean`            | `DNodeInput` | Tipo de los possibles valores booleanos de un tag de entrada.             |
| `TInputFile`               | `DNodeInput` | Tipo de los possibles valores de un tag de entrada de tipo archivo.       |
| `TInputNumber`             | `DNodeInput` | Tipo de los possibles valores num ricos de un tag de entrada.             |
| `TInputString`             | `DNodeInput` | Tipo de los possibles valores string de un tag de entrada.                |
| `TInputType`               | `DNodeInput` | Tipo de los possibles tipos de un tag de entrada.                         |
| `UnwrapInputTag`           | `DNodeInput` | Funci n para desempaquetar un tag de entrada y devolver su valor.         |
| `TDOMSizing`               | `DOMSizing`  | Interfaz para representar el tama o de un elemento `DNode`.               |
