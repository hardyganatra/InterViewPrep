// let myProm = new Promise((resolve, reject) => {
//   let flag = false;
//   if (flag) {
//     resolve("pass");
//   } else {
//     reject("fail");
//   }
// });

// myProm.then(
//   function (result) {
//     console.log(result);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

let myProm = new Promise((resolve, reject) => {
  let flag = false;
  flag ? resolve("success") : reject("fail");
});

myProm.then(
  (data) => console.log(data),
  (data) => console.log(data)
);
