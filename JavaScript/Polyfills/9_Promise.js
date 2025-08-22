class myPromise {
  constructor(executer) {
    this.isFulFilled = false;
    this.isRejected = false;
    this.isCalled = false;
    this.onResolve;
    this.onReject;
    this.value;
    const resolve = (value) => {
      this.isFulFilled = true;
      this.value = value;
      if (typeof this.onResolve === "function") {
        this.onResolve(this.value);
        this.isCalled = true;
      }
    };
    const reject = (value) => {
      this.isRejected = true;
      this.value = value;
      if (typeof this.onReject === "function") {
        this.onReject(this.value);
        this.isCalled = true;
      }
    };

    try {
      executer(resolve, reject);
    } catch (err) {
      console.log(err);
    }
  }
  then(callback) {
    this.onResolve = callback;
    if (this.isFulFilled && !this.isCalled) {
      this.isCalled = true;
      this.onResolve(this.value);
    }
    return this;
  }
  catch(callback) {
    this.onReject = callback;
    if (this.isRejected && !this.isCalled) {
      this.isCalled = true;
      this.onReject(this.value);
    }
    return this;
  }
}
const myPromiseResult = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 1000);
});
myPromiseResult
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
