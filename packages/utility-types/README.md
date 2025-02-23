# @guiurm/utility-types

## Enlaces

- [📋 Requisitos](#requisitos)
- [⚙️ Instalación del paquete](#instalacion)
- [📚 Guía de la API](#guia)
    - [🔧 Utilidades](#guia-utilidades)
        - [🔍 Ejemplos](#guia-utilidades-ejemplos)
    - [🌀 Tipos](#guia-tipos)

## Descripción

El paquete **@guiurm/utility-types** es una librería de tipos de datos que se encuentran disponibles en el lenguaje de programación **TypeScript**. El paquete se encarga de proveer una cantidad de tipos de datos adicionales que se consideran útiles pero no se incluyen en el lenguaje estándar.

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
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#utility-types
        ```

    - **Versión Específica:**

        Para instalar una **versión específica**, reemplace `[version]` con el número de **versión** deseado y utilice:

        ```bash
        npm install git@baboon-lib:baboonlab/baboonlab-foundations.git#utility-types-[version]
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

---

<a id="guia-utilidades"></a>

### 🔧 Utilidades

| Clase | Descripción |
| ----- | ----------- |
| ``    |             |

| Clase                         | Descripción                                                        |
| ----------------------------- | ------------------------------------------------------------------ |
| ``                            |                                                                    |
| `tupleToObject`               | Convierte una tupla en un objeto.                                  |
| `tupplaFromObject`            | Convierte un objeto en una tupla.                                  |
| `isArray`                     | Comprueba si un objeto es un array.                                |
| `convertArrayToCamelCaseKeys` | Convierte las claves de un array de objetos en notación camelCase. |
| `convertToCamelCaseKeys`      | Convierte las claves de un objeto en notación camelCase.           |
| `capitalize`                  | Convierte la primera letra de una cadena en mayúscula.             |
| `charIsBetween`               | Comprueba si un carácter está entre dos otros caracteres.          |
| `dotCase2CamelCase`           | Convierte una cadena en notación dotCase a notación camelCase.     |
| `isLoweCase`                  | Comprueba si una cadena está en minúsculas.                        |
| `isUppercase`                 | Comprueba si una cadena está en mayúsculas.                        |
| `kebabCase2CamelCase`         | Convierte una cadena en notación kebabCase a notación camelCase.   |
| `pascalCase2CamelCase`        | Convierte una cadena en notación PascalCase a notación camelCase.  |
| `replaceChar`                 | Reemplaza un carácter en una cadena.                               |
| `snakeCase2CamelCase`         | Convierte una cadena en notación snakeCase a notación camelCase.   |
| `spaceCase2CamelCase`         | Convierte una cadena en notación spaceCase a notación camelCase.   |
| `toCamelCase`                 | Convierte una cadena en notación camelCase.                        |
| `unCapitalize`                | Convierte la primera letra de una cadena en minúscula.             |

---

<a id="guia-utilidades-ejemplos"></a>

#### 🔍 Ejemplos

Este paquete contiene utilidades para trabajar con diferentes formatos de cadenas y objetos. Entre las utilidades se encuentran funciones para:

- Convertir entre diferentes formatos de cadenas (camelCase, PascalCase, snakeCase, etc.)
- Convertir entre diferentes formatos de objetos (tuplas, objetos, arrays, etc.)
- Realizar operaciones de búsqueda y reemplazo en cadenas
- Realizar operaciones de validación en cadenas

```typescript
// Example of use
const myTuple: [[string, number]] = [["hello", 42]];
const myObject = tupleToObject(myTuple);
console.log(myObject); // {a: 'hello', b: 42, c: true}

const myArray = [1, 2, 3];
const myTupleAgain = tupplaFromObject(myArray);
console.log(myTupleAgain); // [1, 2, 3]

console.log(isArray(myArray)); // true

const myObjectSnakeCase = { "a-b": 1, c_d: 2, "e f": 3 };
const myObjectCamelCase = convertToCamelCaseKeys(myObjectSnakeCase);
console.log(myObjectCamelCase); // { aB: 1, cD: 2, eF: 3 }

const myArraySnakeCase = [{ "a-b": 1 }, { c_d: 2 }, { "e f": 3 }];
const myArrayCamelCase = convertArrayToCamelCaseKeys(myArraySnakeCase);
console.log(myArrayCamelCase); // [{ aB: 1 }, { cD: 2 }, { eF: 3 }]

console.log(capitalize("hello")); // Hello
console.log(charIsBetween("n", "a", "b")); // true

const myStringDotCase = "hello.world";
const myStringCamelCase = dotCase2CamelCase(myStringDotCase);
console.log(myStringCamelCase); // helloWorld

console.log(isLoweCase("hello")); // true
console.log(isUppercase("HELLO")); // true

const myStringKebabCase = "hello-world";
const myStringCamelCaseAgain = kebabCase2CamelCase(myStringKebabCase);
console.log(myStringCamelCaseAgain); // helloWorld

const myStringPascalCase = "HelloWorld";
const myStringCamelCaseAgainAgain = pascalCase2CamelCase(myStringPascalCase);
console.log(myStringCamelCaseAgainAgain); // helloWorld

console.log(replaceChar("hello", "h", true)); // Hello

const myStringSnakeCase = "hello_world";
const myStringCamelCaseAgainAgainAgain = snakeCase2CamelCase(myStringSnakeCase);
console.log(myStringCamelCaseAgainAgainAgain); // helloWorld

const myStringSpaceCase = "hello world";
const myStringCamelCaseAgainAgainAgainAgain = spaceCase2CamelCase(myStringSpaceCase);
console.log(myStringCamelCaseAgainAgainAgainAgain); // helloWorld

console.log(toCamelCase(myStringDotCase)); // helloWorld

console.log(unCapitalize("Hello")); // hello
```

---

<a id="guia-tipos"></a>

### 🔠 Tipos

Estos tipos se utilizan para definir la forma de los eventos y las funciones que los manejan.

| Tipo | Uso | Descripci n |
| ---- | --- | ----------- |
| ``   | ``  |             |

### 🔠 Tipos

Estos tipos se utilizan para definir la forma de los eventos y las funciones que los manejan.

| Tipo                              | Uso | Descripción                                                                         |
| --------------------------------- | --- | ----------------------------------------------------------------------------------- |
| TBasicCallBack                    |     | Tipo de función para callbacks básicas.                                             |
| ExtractTupleField                 |     | Extrae el campo indicado de una tupla.                                              |
| ExtractTupleKey                   |     | Extrae la clave del campo indicado de una tupla.                                    |
| IBasicListener                    |     | Interfaz para los eventos de listener.                                              |
| isArray                           |     | Comprueba si un valor es un array.                                                  |
| isObject                          |     | Comprueba si un valor es un objeto.                                                 |
| TIndexOfArray                     |     | Indice de un elemento en un arreglo.                                                |
| TMandatoryObject                  |     | Interfaz para objetos que requieren todos sus campos.                               |
| TObject2CamelCase                 |     | Convierte un objeto en un objeto con claves en notación camelCase.                  |
| TObject2Tuple                     |     | Convierte un objeto en una tupla.                                                   |
| TObjRemoveEmpty                   |     | Elimina los campos vacíos de un objeto.                                             |
| TOmitEmpty                        |     | Elimina los campos vacíos de un objeto.                                             |
| TOptionalObject                   |     | Interfaz para objetos que pueden tener campos vacíos.                               |
| TOptionalObjectRecursive          |     | Interfaz para objetos que pueden tener campos vacíos de manera recursiva.           |
| TPrettify                         |     | Interfaz para objetos que requieren todos sus campos.                               |
| TStringRecord                     |     | Interfaz para objetos que tienen claves de tipo string.                             |
| TTuplaStructure                   |     | Interfaz para objetos que tienen claves de tipo string y valores de cualquier tipo. |
| Tuple2Object                      |     | Convierte una tupla en un objeto.                                                   |
| TValidUrl                         |     | Comprueba si una cadena es una URL válida.                                          |
| TWindowEventStorage               |     | Tipo de objeto para almacenar eventos en el objeto window.                          |
| TAny2Camel                        |     | Convierte una cadena en notación camelCase.                                         |
| TDotCase2CamelCase                |     | Convierte una cadena en notación camelCase.                                         |
| TKebabCase2CamelCase              |     | Convierte una cadena en notación camelCase.                                         |
| TPascalCase2CamelCase             |     | Convierte una cadena en notación camelCase.                                         |
| TReplace                          |     | Reemplaza una cadena por otra en una cadena.                                        |
| TSnakeCase2CamelCase              |     | Convierte una cadena en notación camelCase.                                         |
| TSpaceCase2CamelCase              |     | Convierte una cadena en notación camelCase.                                         |
| ExtractByPropType                 |     | Extrae los campos de un objeto que tienen un tipo determinado.                      |
| TGetSetValueType                  |     | Tipo de valor para un campo de un objeto.                                           |
| TPrimitiveValues                  |     | Tipo para los valores primitivos de un objeto.                                      |
| TRecursivelyExtractPrimitiveValue |     | Extrae los campos de un objeto que tienen un tipo determinado de manera recursiva.  |
| TValueFromConst                   |     | Extrae el valor de una constante de un objeto.                                      |
