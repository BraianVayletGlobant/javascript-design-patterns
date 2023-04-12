"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counter2 = exports.counter1 = void 0;
// Antes ES5 usando Closure
const counter1 = (function () {
    let instance;
    let count = 0;
    const createInstance = () => {
        return {
            increment: () => ++count,
            decrement: () => --count,
            clear: () => {
                count = 0;
                return count;
            },
        };
    };
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();
exports.counter1 = counter1;
const singleton3 = counter1.getInstance();
const singleton4 = counter1.getInstance();
console.log("---");
console.log("ES5", "singleton3 version");
console.log(`singleton3 and singleton4 are equal? ${singleton3 === singleton4}`);
console.log(`singleton1 version: ${singleton3.increment()}`);
console.log(`singleton2 version: ${singleton4.increment()}`);
console.log(`singleton2 version: ${singleton3.decrement()}`);
console.log(`singleton2 version: ${singleton4.clear()}`);
// Ahora ES6 usando IIFE
let count = 0;
const counter2 = {
    increment() {
        return ++count;
    },
    decrement() {
        return --count;
    },
    clear() {
        count = 0;
        return count;
    },
};
exports.counter2 = counter2;
const singleton1 = Object.freeze(counter2);
const singleton2 = Object.freeze(counter2);
console.log("---");
console.log("ES6", "singleton version");
console.log(`singleton1 and singleton2 are equal? ${singleton1 === singleton2}`);
console.log(`singleton1 version: ${singleton1.increment()}`);
console.log(`singleton2 version: ${singleton2.increment()}`);
console.log(`singleton2 version: ${singleton1.decrement()}`);
console.log(`singleton2 version: ${singleton2.clear()}`);
