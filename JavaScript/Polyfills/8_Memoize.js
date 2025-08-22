function memoize(fn, context) {
  let cache = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!cache[argsCache]) {
      cache[argsCache] = fn.apply(context || this, args);
    }
    return cache[argsCache];
  };
}

const expCal = memoize(function (length) {
  console.time();
  let res = 0;
  console.log("Res Before Loop");
  for (let i = 0; i < length; i++) {
    res += i;
  }
  console.log("Res After Loop");
  console.timeEnd();
});

expCal(1000000000);
expCal(100000);
expCal(1000000000);
expCal(100);
