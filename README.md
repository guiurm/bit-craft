# @guiurm/foundation

> Este proyecto es un **monorepo** que alberga **múltiples paquetes** diseñados para funcionar de manera integrada.

- [📋 Requisitos](#requisitos)
- [⚙️ Instalación del paquete](#instalacion)
- [📂 Proyectos](#proyectos)
- [💡 Ejemplo de Uso](#ejemplos)
- [📚 Documentación](#documentacion)

La arquitectura de monorepo permite gestionar y desarrollar diversos paquetes desde un único repositorio, facilitando el mantenimiento, la coordinación, y el intercambio de código entre los diferentes componentes.

Cada paquete dentro del monorepo tiene su **propósito y funcionalidad específicos**, contribuyendo al ecosistema general del proyecto. Entre los paquetes se incluyen:

- **Herramientas para el manejo de eventos** (_event-driver_)
- **Componentes de interfaz de usuario** (_v-lib_ y _doom-kit_)
- **Enrutamiento multilingüe** (_multi-lang-router_)
- **Tipos utilitarios** (_utility-types_)
- Y otros...

Proporcionando una base robusta para el desarrollo de aplicaciones **complejas y escalables**.

<a id="requisitos"></a>

## 📋 Requisitos

Para trabajar con este monorepo, asegúrese de cumplir con los siguientes requisitos previos:

- **Node.js**: Se requiere la versión 20 LTS o superior para ejecutar scripts y herramientas dentro del monorepo.
- **npm**: La herramienta de línea de comandos de Node.js, utilizada para instalar dependencias y gestionar scripts.
- **Git**: Utilizado para clonar el repositorio y gestionar el control de versiones.
- **Editor de Código**: Se recomienda utilizar un editor como Visual Studio Code para una mejor experiencia de desarrollo.

- **Configuración de SSH y Git**: Es necesario configurar SSH y Git para una interacción adecuada.

    Para configurar SSH y Git, cree un archivo `~/.ssh/config` con el siguiente contenido:

    ```config
    Host baboon-lib
        HostName bitbucket.org
        IdentityFile ~/.ssh/[your_ssh_key]
    ```

- **Generación de una clave SSH**:

    Si no posee una clave, debe generar un par de claves SSH (pública y privada). Consulte la documentación de Atlassian para generar claves SSH según su sistema operativo:

    - **[Windows](https://support.atlassian.com/bitbucket-cloud/docs/set-up-personal-ssh-keys-on-windows/)**
    - **[Linux](https://support.atlassian.com/bitbucket-cloud/docs/set-up-personal-ssh-keys-on-linux/)**
    - **[macOS](https://support.atlassian.com/bitbucket-cloud/docs/set-up-personal-ssh-keys-on-macos/)**

<a id="instalacion"></a>

## ⚙️ Instalación del paquete

Este paquete se instala mediante un sistema basado en **_Git_**, permitiendo acceder a distintas versiones a través de **_npm_**. Siga estos pasos para completar la instalación:

1. **Instalación del Paquete:**

    Utilice **npm** para instalar el paquete directamente desde la URL proporcionada. Puede optar por instalar la **_última versión_** o una **_específica_**:

    - **Última Versión:**

        Para instalar siempre la última versión del paquete, use el siguiente comando que accede a la rama `subtree`:

        ```bash
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#foundation
        ```

    - **Versión Específica:**

        Para instalar una **versión específica**, reemplace `[version]` con el número de **versión** deseado y utilice:

        ```bash
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#foundation-[version]
        ```

    Esto le permitirá trabajar con la versión exacta que necesite.

2. **Instalación de Dependencias:**

    Después de seleccionar la versión adecuada, instale las dependencias necesarias ejecutando:

    ```bash
    npm install
    ```

    Esto garantizará que todas las dependencias del proyecto estén disponibles.

<a id="proyectos"></a>

## 📂 Proyectos

Este monorepo incluye varios paquetes esenciales:

| Paquete                                                      | Uso                                                                         |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- |
| **[@guiurm/api-connector](packages/api-connector/)**         | **Herramientas** para crear conexiones con API por medio de axios.          |
| **[@guiurm/doom-kit](packages/doom-kit/)**                   | **Herramientas** para crear interfaces de usuario y manipular el **DOM**.   |
| **[@guiurm/event-driver](packages/event-driver/)**           | _Manejador de eventos_ para aplicaciones.                                   |
| **[@guiurm/iterables](packages/iterables/)**                 | _Tipos_ y funciones para trabajar con _iterables_.                          |
| **[@guiurm/multi-lang-router](packages/multi-lang-router/)** | Enrutador **multilingüe** para aplicaciones web en **Vue 3**.               |
| **[@guiurm/utility-types](packages/utility-types/)**         | _Tipos_ y funciones de **TypeScript** para facilitar el desarrollo.         |
| **[@guiurm/v-lib](packages/v-lib/)**                         | Biblioteca de componentes y utilidades para aplicaciones web con **Vue 3**. |

<a id="ejemplos"></a>

## 💡 Ejemplo de Uso

Para acceder al contenido del paquete, puede utilizar importaciones como las siguientes:

```typescript
import { ... } from "@guiurm/foundation/api-connector";
import { ... } from "@guiurm/foundation/doom-kit";
import { ... } from "@guiurm/foundation/event-driver";
import { ... } from "@guiurm/foundation/iterables";
import { ... } from "@guiurm/foundation/multi-lang-router";
import { ... } from "@guiurm/foundation/utility-types";
import { ... } from "@guiurm/foundation/v-lib";
```

<a id="documentacion"></a>

## 📚 Documentación

Para más información sobre la **implementación** de cada paquete, visite la _documentación_ de cada subpaquete:

- **[@guiurm/api-connector](packages/api-connector/README.md)**
- **[@guiurm/doom-kit](packages/doom-kit/README.md)**
- **[@guiurm/event-driver](packages/event-driver/README.md)**
- **[@guiurm/iterables](packages/iterables/README.md)**
- **[@guiurm/multi-lang-router](packages/multi-lang-router/README.md)**
- **[@guiurm/utility-types](packages/utility-types/README.md)**
- **[@guiurm/v-lib](packages/v-lib/README.md)**
