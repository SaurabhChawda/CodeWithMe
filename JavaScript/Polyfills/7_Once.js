function once(fn) {
  let ran = false;
  return function () {
    if (ran) {
      return;
    } else {
      ran = true;
      return fn.apply(this, arguments);
    }
  };
}

const onceFn = once(() => {
  console.log("Hello");
});
onceFn("Hello");
onceFn();
onceFn();
onceFn();

const obj = {
  count: 100,
  increment: once(function (num) {
    this.count += num;
    console.log(`Count: ${this.count}`);
  }),
};

obj.increment(5);
obj.increment(10);
