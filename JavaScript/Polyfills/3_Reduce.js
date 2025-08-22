const arr = [1, 2, 3, 4, 5];
const resultDefaultReduce = arr.reduce((acc, curr, i, arr) => acc + curr);
console.log(resultDefaultReduce);

Array.prototype.myReduce = function (callback, intialValue) {
  if (Array.isArray(this)) {
    if (typeof callback === "function") {
      let accumulator = intialValue;
      for (let i = 0; i < this.length; i++) {
        accumulator = accumulator
          ? callback(accumulator, this[i], i, this)
          : this[i];
      }
      return accumulator;
    } else {
      return new TypeError(callback + " is not a function");
    }
  } else {
    return new TypeError(this + " is not an array");
  }
};

const reduceResult = arr.myReduce((acc, curr, i, arr) => acc + curr);
console.log(reduceResult);
