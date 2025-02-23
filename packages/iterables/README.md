# @guiurm/iterables

## Enlaces

- [📋 Requisitos](#requisitos)
- [⚙️ Instalación del paquete](#instalacion)
- [📚 Guía de la API](#guia)

    - [🏷️ Clases](#guia-clases)
        - [🔍 Ejemplos](#guia-clases-ejemplos)

**@guiurm/iterables** es un paquete de **utilidades** para trabajar con **iterables** en **TypeScript**. Este paquete forma parte del monorepoguiurm\*@guiurm/foundation\*\* y se encuentra diseñado para ser utilizado en proyectos que requieren operaciones avanzadas con iterables.

El paquete **@guiurm/iterables** se enfoca en brindar una **api** simple y **eficiente** para trabajar con iterables, y en proveer una **compatibilidad** total con los **estándares** de **TypeScript**.

Este paquete se ha diseñado y desarrollado para ser utilizado en proyectos que requieren **operaciones avanzadas** con iterables, como por ejemplo, operaciones de **filtrado**, **ordenamiento**, **agrupamiento**, **reducción**, etc.

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
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#iterables
        ```

    - **Versión Específica:**

        Para instalar una **versión específica**, reemplace `[version]` con el número de **versión** deseado y utilice:

        ```bash
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#iterables-[version]
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

| Clase             | Descripción                                                           |
| ----------------- | --------------------------------------------------------------------- |
| `TupleStorage`    | Realiza operaciones sobre pares de valores.                           |
| `KeyValueStorage` | Realiza operaciones sobre objetos que contienen pares de clave-valor. |

<a id="guia-clases-ejemplos"></a>

#### 🔍 Ejemplos

1. TupleStorage

    ```typescript
    const tuple = new TupleStorage();

    console.log(tuple.size()); // 3
    console.log(tuple.keys()); // ['a', 'b', 'c']
    console.log(tuple.values()); // [1, 2, 3]
    console.log(tuple.get("a")); // 1
    console.log(tuple.get("d")); // null

    tuple.add("a", 1);
    console.log(tuple.size()); // 4
    console.log(tuple.keys()); // ['a', 'b', 'c', 'd']
    console.log(tuple.values()); // [1, 2, 3, 4]

    tuple.remove("c");
    console.log(tuple.size()); // 3
    console.log(tuple.keys()); // ['a', 'b', 'd']
    console.log(tuple.values()); // [1, 2, 4]

    console.log(tuple.toString());
    // output: '[["a",1],["b",2],["d",4]]'
    ```

1. KeyValueStorage

    ```typescript
    const storage = new KeyValueStorage<{ name: string; age: number }>();

    storage.add("name", "juan");
    storage.add("age", 20);
    console.log(storage.size()); // 2
    console.log(storage.keys()); // ['key1', 'key2']
    console.log(storage.values()); // [10, 20]

    storage.extract("age");
    console.log(storage.size()); // 1
    console.log(storage.keys()); // ['name']
    console.log(storage.values()); // ["juan"]

    console.log(storage.toString()); // '{"name":"juan"}'
    ```
