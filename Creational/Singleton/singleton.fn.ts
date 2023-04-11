type SingletonType = {
  version: string;
};

const Singleton = (() => {
  let instance: SingletonType;

  const createInstance = (version: string): SingletonType => {
    return {
      version,
    };
  };

  return {
    getInstance(version: string): SingletonType {
      if (!instance) {
        instance = createInstance(version);
      }

      return instance;
    },
  };
})();

/**
 * Main function
 */
function appSingleton() {
  console.log("--- [TS] Calling appSingleton ---\n");
  const singleton1 = Singleton.getInstance("version-1");
  const singleton2 = Singleton.getInstance("version-2");
  const singleton3 = Singleton.getInstance("version-3");

  console.log(
    `singleton1 and singleton2 are equal? ${
      singleton1 === singleton2 ? "yes" : "no"
    }`
  );
  console.log(
    `singleton2 and singleton3 are equal? ${
      singleton2 === singleton3 ? "yes" : "no"
    }`
  );

  // Let's verify if the versions are equal too
  console.log(`singleton1 version: ${singleton1.version}`);
  console.log(`singleton2 version: ${singleton2.version}`);
  console.log(`singleton3 version: ${singleton3.version}`);
}

appSingleton();
