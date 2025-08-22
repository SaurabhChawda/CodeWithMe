// Writing a polyfill for Promise involves understanding how promises work and implementing the necessary methods and behavior. Here's how you can write a basic polyfill for ES6 Promises:

// Steps to Write a Promise Polyfill:
// Constructor: A promise constructor takes an executor function with two arguments: resolve and reject. These control the state of the promise.

// States: A promise can be in one of three states:

// pending: Initial state, neither fulfilled nor rejected.
// fulfilled: Operation completed successfully.
// rejected: Operation failed.
// Methods:

// then: Attaches callbacks for fulfilled or rejected states.
// catch: Attaches a callback for only the rejected state.
// finally (optional): Attaches a callback to execute after the promise settles.
// State Transition:

// A promise must transition from pending to either fulfilled or rejected.
// Once transitioned, the state cannot change.
// Execution:

// Ensure the executor function runs immediately.
// Callbacks must be invoked asynchronously.

const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  #thenCallbacks = [];
  #catchCallbacks = [];
  #state = STATE.PENDING;
  #value;
  constructor(callback) {
    try {
      callback(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }
  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCallbacks.forEach((callback) => callback(this.#value));
    }
    if (this.#state === STATE.REJECTED) {
      this.#catchCallbacks.forEach((callback) => callback(this.#value));
    }
  }
  resolve(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.FULFILLED;
  }
  reject(err) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.REJECTED;
  }
  then(callback) {
    this.#then.callbacks.push(callback);
  }
  catch() {}
  finally() {}
}

new Promise((resolve, reject) => {});

class TestPromise {
  state = STATE.PENDING;
  value;
  constructor(callback) {
    callback(this.resolve, this.reject);
  }
  resolve = (value) => {
    if (this.state !== STATE.PENDING) return;
    this.value = value;
    this.state = STATE.FULFILLED;
  };
  reject = (err) => {
    if (this.state !== STATE.PENDING) return;
    this.value = value;
    this.state = STATE.REJECTED;
  };
}

const test = new TestPromise((resolve, reject) => {});
