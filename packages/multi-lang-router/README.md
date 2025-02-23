# @guiurm/multi-lang-router

## Enlaces

- [📋 Requisitos](#requisitos)
- [⚙️ Instalación del paquete](#instalacion)
- [📚 Guía de la API](#guia)

    - [🧩 Componentes](#guia-componentes)
        - [🔍 Ejemplos](#guia-components-ejemplos)
    - [🏷️ Clases](#guia-clases)
        - [🔍 Ejemplos](#guia-clases-ejemplos)
    - [🔧 Utilidades](#guia-utilidades)
        - [🔍 Ejemplos](#guia-utilidades-ejemplos)

Este paquete es una utilidad para crear y administrar enrutadores de aplicaciones web multiling es. Permite definir rutas y traducir las mismas seg n el idioma seleccionado por el usuario. Adem s, el paquete proporciona una forma de normalizar las rutas y traducir las mismas para mostrarlas en la interfaz de usuario.

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
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#multi-lang-router
        ```

    - **Versión Específica:**

        Para instalar una **versión específica**, reemplace `[version]` con el número de **versión** deseado y utilice:

        ```bash
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#multi-lang-router-[version]
        ```

    Esto le permitirá trabajar con la versión exacta que necesite.

2. **Instalación de Dependencias:**

    Después de seleccionar la versión adecuada, instale las dependencias necesarias ejecutando:

    ```bash
    npm install
    ```

    Esto garantizará que todas las dependencias del proyecto estén disponibles.

3. **Instalación de plugin**

    ```typescript
    import { createApp } from "vue";
    import { createRouter, createWebHistory } from "vue-router";
    import App from "./App.vue";
    import {
        createMultiLangRouter,
        type TLangRouterProps,
        createInternMultiLangRouter,
    } from "@guiurm/multi-lang-router";

    const routes: TLangRouterProps[] = [];
    export const router = createRouter({
        history: createWebHistory(),
        routes: createInternMultiLangRouter(routes).getConf(),
        strict: true,
    });

    const app = createApp(App);

    app.use(createMultiLangRouter(app, { history: createWebHistory(), strict: true, routes }));

    app.mount("#app");
    ```

<a id="guia"></a>

## 📚 Guía de la API

La siguiente sección describe los diferentes componentes y utilidades que se encuentran en la librería, junto con sus métodos, propiedades y ejemplos de uso.

<a id="guia-componentes"></a>

### 🧩 Componentes

| Componente            | Descripción                                                                        |
| --------------------- | ---------------------------------------------------------------------------------- |
| `RouterLinkTranslate` | Componente para renderizar un enlace con la ruta traducida al idioma seleccionado. |

- Props:
    ```typescript
    {
      class?: unknown;
      style?: unknown;
      custom?: boolean | undefined;
      activeClass?: string | undefined;
      exactActiveClass?: string | undefined;
      ariaCurrentValue?: "page" | "step" | "location" | "date" | "time" | "true" | "false" | undefined;
      replace?: boolean | undefined;
      lang?: string;
      to: string | number | TRouterTo;
    }
    ```

<a id="guia-components-ejemplos"></a>

#### 🔍 Ejemplos

    ```vue
    <script setup lang="ts">
    import { RouterLinkTranslate } from '@guiurm/multi-lang-router';
    </script>

    <template>
        <RouterLinkTranslate to="/first">Primera pagina</RouterLinkTranslate>
        <RouterLinkTranslate :to="{name:'somePageName'}">Alguna pagina</RouterLinkTranslate>
    </template>
    ```

---

<a id="guia-clases"></a>

### 🏷️ Clases

| Clase             | Descripción                                                     |
| ----------------- | --------------------------------------------------------------- |
| `MultiLangRouter` | Clase que maneja el enrutamiento de una aplicación multilingüe. |
| `LangRoute`       | Clase que representa una ruta asociada a un idioma.             |

<a id="guia-clases-ejemplos"></a>

#### 🔍 Ejemplos

```ts
import { MultiLangRouter, LangRoute } from "@guiurm/multi-lang-router";

const router = new MultiLangRouter({
    routes: [
        new LangRoute({
            path: "/first",
            name: "first",
            component: () => import("../views/FirstView.vue"),
            lang: "es",
        }),
        new LangRoute({
            path: "/second",
            name: "second",
            component: () => import("../views/SecondView.vue"),
            lang: "en",
        }),
    ],
});

router.setup();
```

<a id="guia-clases-ejemplos-dnode"></a>

---

<a id="guia-utilidades"></a>

### 🔧 Utilidades

| Clase             | Descripción                                                |
| ----------------- | ---------------------------------------------------------- |
| `translateRoute`  | Traduce una ruta de una aplicación a un idioma especifico. |
| `createLangRoute` | Crea una ruta asociada a un idioma para una aplicación.    |

---

<a id="guia-utilidades-ejemplos"></a>

#### 🔍 Ejemplos

```typescript
const route = new LangRoute({ name: "home", path: "/home", langAlias: { es: "/inicio", en: "/home" } });
translateRoute({ name: "home", lang: "es" }); // '/inicio'

const route = new LangRoute({ name: "home", path: "/home", langAlias: { es: "/inicio", en: "/home" } });
createLangRoute({ name: "home", path: "/home", langAlias: { es: "/inicio", en: "/home" } }); // LangRoute { ... }
```

---
