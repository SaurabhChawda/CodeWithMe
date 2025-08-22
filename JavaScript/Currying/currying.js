// // Currying
// function curriedMultiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// const multiply = curriedMultiply(2)(3)(4);
// console.log(multiply);

// function curriedSum(a) {
//   return function (b) {
//     if (!b) {
//       return a;
//     } else {
//       return curriedSum(a + b);
//     }
//   };
// }
// const test = curriedSum(2)(3)(4)(5);
// console.log(test());
