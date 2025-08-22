const customPromise1 = (isResolved) => {
  return new Promise((resolve, reject) => {
    if (isResolved) {
      setTimeout(() => {
        resolve("Promise1 Resolved");
      }, 3000);
    } else {
      setTimeout(() => {
        reject("Promise1 Reject");
      }, 3000);
    }
  });
};
const customPromise2 = (isResolved) => {
  return new Promise((resolve, reject) => {
    if (isResolved) {
      setTimeout(() => {
        resolve("Promise2 Resolved");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Promise2 Reject");
      }, 2000);
    }
  });
};
const customPromise3 = (isResolved) => {
  return new Promise((resolve, reject) => {
    if (isResolved) {
      setTimeout(() => {
        resolve("Promise3 Resolved");
      }, 1000);
    } else {
      setTimeout(() => {
        reject("Promise3 Reject");
      }, 1000);
    }
  });
};
// 1. Resolved promise call
// customPromise1(true)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Reject promise call
// // 1.1  customPromise1(false)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// // 2 Promise Chain

// customPromise1(true)
//   .then((res) => {
//     return res;
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((res) => {
//     console.log(res);
//     return customPromise2(false);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // 3 Promise Apis

// 1  Promsie.all
// Promsie.all :- Only settled if all the promise get resolve
// 1.1 when all the Promise get resolve
// Promise.all([customPromise1(true), customPromise2(true), customPromise3(true)])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // 1.2 when One Of the Promise get fails
// Promise.all([customPromise1(true), customPromise2(false), customPromise3(true)])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2  Promsie.allSettled
// Promsie.allSettled :- settled anyway
// // 2.1 when all the Promise get resolve
// Promise.allSettled([
//   customPromise1(true),
//   customPromise2(true),
//   customPromise3(true),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2.2 when One Of the Promise get fails
// Promise.allSettled([
//   customPromise1(true),
//   customPromise2(false),
//   customPromise3(true),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //  2.3 when all the Promise get fails
// Promise.allSettled([
//   customPromise1(false),
//   customPromise2(false),
//   customPromise3(false),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 3  Promsie.race
// Promise.race :- Who settled first
// // 3.1 when all the Promise get resolve
// Promise.race([customPromise1(true), customPromise2(true), customPromise3(true)])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 3.2 when One Of the Promise get fails
// Promise.race([
//   customPromise1(true),
//   customPromise2(true),
//   customPromise3(false),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 4  Promsie.any
// Promise.any :- When any of the promise get resolved, It will wait for all the promise to settle
// // 4.1 when all the Promise get resolve
// Promise.any([customPromise1(true), customPromise2(true), customPromise3(true)])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // 4.2 when One Of the Promise get fails
// Promise.any([customPromise1(true), customPromise2(true), customPromise3(false)])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // 4.3 when all the Promise get fails
// AggregateError: All Promise  were rejected
// Promise.any([
//   customPromise1(false),
//   customPromise2(false),
//   customPromise3(false),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.errors);
//   });
