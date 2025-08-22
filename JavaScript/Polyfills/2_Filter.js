const arr = [1, 2, 3, 4, 5];
Array.prototype.myFilter = function (callback) {
  if (!Array.isArray(this)) {
    return new TypeError(this + " is not an array");
  } else {
    if (typeof callback !== "function") {
      return new TypeError(callback + " is not a function");
    } else {
      const result = [];
      for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
          result.push(this[i]);
        }
      }
      return result;
    }
  }
};
const filterResult = arr.filter((item) => item % 2 === 0);
console.log(filterResult);

const myFilterResult = arr.myFilter((item) => item % 2 === 0);
console.log(myFilterResult);
