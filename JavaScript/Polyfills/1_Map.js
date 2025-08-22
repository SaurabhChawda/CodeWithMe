// Array.prototype.myMap = function (callback) {
//   if (!Array.isArray(this)) {
//     throw new TypeError(this + " is not an array");
//   } else {
//     if (typeof callback !== "function") {
//       throw new TypeError(callback + " is not a function");
//     } else {
//       const result = [];
//       for (var i = 0; i < this.length; i++) {
//         result[i] = callback(this[i], i, this);
//       }
//       return result;
//     }
//   }
// };

// const arr = [1, 2, 3, 4, 5];
// const mapResult = arr.map((item) => {
//   return item * 2;
// });
// console.log(mapResult); // [2, 4, 6, 8, 10]
// const myMapResult = arr.myMap((item) => {
//   return item * 2;
// });
// console.log(mapResult); // [2, 4, 6, 8, 10]
