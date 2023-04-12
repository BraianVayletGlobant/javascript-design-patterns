# SINGLETON

Este patrón de diseño es útil para garantizar que una clase tenga una única instancia y permitir el acceso global a dicha instancia desde cualquier lugar de la aplicación.

En el paradigma de **Programación Orientada a Objetos (POO)**, el patrón Singleton se implementa mediante la creación de una clase que tiene un constructor privado y un método estático que devuelve la única instancia de esa clase. Esto evita la creación de múltiples objetos y garantiza que siempre se acceda a la misma instancia. Esto es útil en situaciones en las que solo se necesita una instancia de una clase, como en el caso de una clase de configuración o un objeto de conexión a la base de datos.

```typescript
class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Aquí se podría inicializar cualquier propiedad necesaria
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  // Métodos de la clase Singleton...
}

// Para utilizar el Singleton:
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true, ya que se está utilizando la misma instancia en ambos casos
```

> _En este ejemplo, la clase Singleton tiene un constructor privado para evitar que se creen nuevas instancias, y un método estático getInstance() que devuelve la única instancia disponible. En la llamada al método getInstance(), si la instancia aún no ha sido creada, se crea una nueva instancia y se devuelve, de lo contrario, simplemente devuelve la instancia existente._

En el paradigma de **Programación Funcional**, se puede implementar el patrón Singleton utilizando funciones. En lugar de utilizar una clase, se puede crear una función que tenga una variable privada que mantenga la instancia y devuelva una función que proporcione acceso a dicha instancia. De esta manera, se puede garantizar que solo haya una instancia de la función y que siempre se acceda a la misma instancia.

```typescript
function Singleton() {
  let instance: Singleton;

  const createInstance = () => {
    // Aquí se podría inicializar cualquier propiedad necesaria
    return {
      /* Propiedades del objeto Singleton */
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
  };
}

// Para utilizar el Singleton:
const singleton1 = Singleton().getInstance();
const singleton2 = Singleton().getInstance();

console.log(singleton1 === singleton2); // true, ya que se está utilizando la misma instancia en ambos casos
```

> _En este ejemplo, la función Singleton devuelve un objeto que tiene una variable privada instance que mantiene la instancia, y un método getInstance() que devuelve la única instancia disponible. En la llamada al método getInstance(), si la instancia aún no ha sido creada, se llama a la función createInstance() que crea una nueva instancia y la asigna a la variable instance, de lo contrario, simplemente devuelve la instancia existente._

En el desarrollo Frontend, el patrón Singleton se utiliza comúnmente para crear objetos globales que proporcionen acceso a recursos compartidos, como la configuración de la aplicación o la conexión a la API. Por ejemplo, en el desarrollo de aplicaciones web de una sola página (SPA), se puede utilizar el patrón Singleton para crear un objeto que proporcione acceso global al enrutador de la aplicación y maneje la navegación en la SPA.

Otro caso de uso común del patrón Singleton en el desarrollo Frontend es en la creación de objetos que se utilizan en toda la aplicación, como un objeto de traducción de idiomas o un objeto que maneje el estado global de la aplicación. Al utilizar el patrón Singleton, se garantiza que estos objetos solo se creen una vez y que siempre se acceda a la misma instancia desde cualquier parte de la aplicación.

Por Ejemplo este patron suele estar implementado en muchas librerías y frameworks de uso diario.

- **React** utiliza el patrón Singleton en su arquitectura para crear y gestionar los componentes. El componente React es una instancia única que se representa en la interfaz de usuario. La creación de múltiples instancias de componentes en React puede ser ineficiente, ya que cada instancia tendría su propio estado y ciclo de vida.

- **Redux** es una biblioteca de manejo de estado que utiliza el patrón Singleton para crear y gestionar el store, que es un objeto centralizado que contiene el estado de la aplicación. El store de Redux es una instancia única que se utiliza en toda la aplicación para almacenar y acceder al estado.

- **Angular** utiliza el patrón Singleton en varias partes de su arquitectura, como en los servicios y en los providers. Un servicio en Angular es una instancia única que se utiliza para proporcionar funcionalidad en toda la aplicación. Los providers son objetos Singleton que se utilizan para inyectar dependencias en los componentes de Angular.

- **Vue** utiliza el patrón Singleton en su sistema de inyección de dependencias. Los objetos Singleton se utilizan para proporcionar servicios en toda la aplicación y se pueden inyectar en los componentes Vue.

## Pros y Contras

**Pros:**

- Control de la instancia: Un Singleton permite tener un control estricto sobre la creación de instancias. Al tener una única instancia, se evita la creación de varias instancias innecesarias y se asegura que todos los componentes de la aplicación estén usando la misma instancia.
- Fácil acceso: La instancia única del Singleton se puede acceder fácilmente desde cualquier lugar de la aplicación, ya que su acceso está centralizado en el método estático getInstance(). Esto hace que la instancia sea fácil de usar en diferentes partes de la aplicación.
- Ahorro de recursos: Al tener una única instancia, se ahorran recursos al evitar la creación de múltiples instancias y al reducir el uso de memoria.
- Puede estar seguro de que una clase tiene solo una instancia.
- Obtienes un punto de acceso global a esa instancia.
- El objeto singleton se inicializa solo cuando se solicita por primera vez.

**Contras:**

- Dificultad para testear: Al tener una única instancia, los Singletons pueden hacer que las pruebas unitarias sean más difíciles de realizar. Las pruebas unitarias deben ser independientes entre sí y el uso de un Singleton puede hacer que las pruebas sean más difíciles de configurar.
- Acoplamiento: El uso excesivo de Singleton puede provocar un acoplamiento excesivo entre las diferentes partes de la aplicación. Esto puede dificultar la modularidad y la escalabilidad de la aplicación.
- Problemas de concurrencia: Si el Singleton es utilizado por varios procesos o hilos de ejecución simultáneamente, puede haber problemas de concurrencia. En estos casos, se deben implementar mecanismos para garantizar la coherencia de los datos.
- Viola el Principio de Responsabilidad Única . El patrón resuelve dos problemas a la vez.
- El patrón Singleton puede enmascarar un mal diseño, por ejemplo, cuando los componentes del programa saben demasiado unos de otros.
- El patrón requiere un tratamiento especial en un entorno de subprocesos múltiples para que varios subprocesos no creen un objeto único varias veces.

> Por causa de las contras se lo suele considerar a Singleton como un **ANTI-PATRON**.

## EXTRA INFO

- [refactoring.guru - singleton](https://refactoring.guru/design-patterns/singleton)
- [patterns.dev - singleton](https://www.patterns.dev/posts/singleton-pattern)
