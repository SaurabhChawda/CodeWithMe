// Async Await

// 1 . Async Always return a Promise

const customPromise = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});
const customPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 7000);
});
const customPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 5000);
});

// 1.1;
// async function getData() {
//   return "Namaste";
// }
// getData().then((res) => {
//   console.log(res);
// });

// // 1.2;
// async function getData() {
//   return "Namaste";
// }
// getData().then((res) => {
//   console.log(res);
// });

// // 1.3;
// async function getData() {
//   return customPromise;
// }
// getData().then((res) => {
//   console.log(res);
// });

//  2. Await
// 2.1 How was promise being used

// function getData() {
//   customPromise.then((res) => {
//     console.log(res);
//   });
// }
// getData();

// 2.1 promise with Async and Await
// async function getData() {
//   const value = await customPromise;
//   console.log("P2",value);
// }
// getData();

// 2.2
async function getData() {
  const value1 = await customPromise1;
  console.log("value1", value1);
  const value2 = await customPromise2;
  console.log("value2", value2);
}
getData();

// 2.3
// async function getData() {
//   const value1 = await customPromise2;
//   console.log("value1", value1);
//   // wait for the resolve of value1
//   // All the promise start settled simultaneously
//   const value2 = await customPromise1;
//   console.log("value2", value2);
//   // After 2 sec Promise will be reolved
//   // After 3 sec Promise will  be reolved
// }
// getData();
// async function getGitHubUser(){
//   const user1 = await fetch("https://api.github.com/users/SaurabhChawda").then(res => res.json());
//   console.log(user1);
//   const user2 = await fetch("https://api.github.com/users/akshaymarch7").then(res => res.json());
//   console.log(user2);
// }
// getGitHubUser();
