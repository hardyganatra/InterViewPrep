// const users = [
//   { name: 'Hardik', lastName: 'ganatra', age: 25 },
//   { name: 'Virat', lastName: 'Kohli', age: 32 },
//   { name: 'Elon', lastName: 'musk', age: 45 },
//   { name: 'Forum', lastName: 'musk', age: 25 },
//   { name: 'lara', lastName: 'musk', age: 45 },
//   { name: 'Rohit', lastName: 'musk', age: 33 },
// ];

// console.log(
//   users.reduce((acc, crr) => {
//     if (acc[crr.age] >= 0) {
//       acc[crr.age] = acc[crr.age] + 1;
//     } else {
//       acc[crr.age] = 1;
//     }
//     return acc;
//   }, {})
// );

// console.log(
//   users.reduce((acc, crr) => {
//     crr.age < 30 && acc.push(crr.name);
//     return acc;
//   }, [])
// );

// list of names of users

// const listOfNames = users.map((user) => user.name);
// console.log(listOfNames);

// list of names where age is less than 30

// const ageLessThan30 = users.filter((user) => user.age <= 30);
// console.log(ageLessThan30);

//  sum of age of all users

// const sumOfAge = users.reduce((acc, crr) => {
//   acc += crr.age;
//   return acc;
// }, 0);

// console.log(sumOfAge);

// const customer1 = {
//   name: 'Virat',
//   active: true,
//   cart: [],
//   purchases: [],
// };

// // Add items to cart

// const addThreePercentTaxToCartItem = (cartItem) => {
//   return { ...cartItem, price: cartItem.price + 0.03 * cartItem.price };
// };

// const addToCart = (user, item) => {
//   let { cart } = user;
//   user.cart = [...cart, addThreePercentTaxToCartItem(item)];
//   console.log(user);
// };

// addToCart(customer1, { name: 'item1', price: 100 });
// addToCart(customer1, { name: 'item1', price: 100 });

////////////////////////////////////////////////////////////////////////////////////////////////////

// const radius = [1, 5, 7, 10, 100];
// const removeLessThan10 = (data) => {
//   return data >= 10;
// };

// console.log(radius.filter(removeLessThan10));

////////////////////////////////////////////////////////////////////////////////////////////////////

// const Name = {
//   firstName: 'Hardik',
//   lastName: 'Ganatra',
// };

// function printFullName(street) {
//   return `${this.firstName} ${this.lastName} ${street}`;
// }

// const Other = {
//   firstName: 'ELon',
//   lastName: 'Musk',
// };

// // console.log(printFullName.call(Other));
// // console.log(printFullName.call(Name, 'vasai'));
// // console.log(printFullName.apply(Name, ['vasai']));

// console.log(printFullName.bind(Name, 'vasai')());

////////////////////////////////////////////////////////////////////////////////////////////////////

// let multiply = function (x, y) {
//   return x * y;
// };

// let multiplyBy2 = multiply.bind(null, 2);
// // let multiplyBy2 = multiply.bind(null, 2 , 2); >>> if you do this this is not currying answer will always be 4 x = 2 , y = 2
// let multiplyBy100 = multiply.bind(null, 100);

// console.log(multiplyBy2(5));
// console.log(multiplyBy100(5));

// const multiplyClosureGeneric = function (x) {
//   return function (y) {
//     return x * y;
//   };
// };

// const multiplyClosureGeneric = (x) => (y) => x * y;

// let multiplyBy2 = multiplyClosureGeneric(2);
// console.log(multiplyBy2(5));
// let multiplyBy100 = multiplyClosureGeneric(1000);
// console.log(multiplyBy100(5));

////////////////////////////////////////////////////////////////////////////////////////////////////

// const stocks = ['FN9382', 2, 3, 5];
// const wareHouses = ['SOUTH', 'SOUTH_EAST'];

// function prepInvoiceLine(stockID) {
//   //some check code
//   console.log(stockID);
//   if (!stocks.includes(stockID)) {
//     throw Error('Stock not present');
//   }

//   return (warehouseID) => {
//     //some check code
//     if (!wareHouses.includes(warehouseID)) {
//       throw Error('wareHouseId not present');
//     }
//     return (stockDeduct) => {
//       //some check code
//       return stockID + ' from ' + warehouseID + ' is reduced by ' + stockDeduct;
//     };
//   };
// }

// let orderItem298 = prepInvoiceLine('FN9382')('SOUTH')(2);

// console.log(orderItem298);
////////////////////////////////////////////////////////////////////////////////////////////////////
// var arr = [1, 2, 3, 4, 5];
// arr.forEach((val, index, array) => {
//   //   console.log({ val }, { index }, { array });
// });

// //  forEach polyfill

// Array.prototype.myForEach = function (callback) {
//   //   console.log(this);
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// arr.myForEach((val, index, array) => {
//   // console.log({ val, index, array });
// });
////////////////////////////////////////////////////////////////////////////////////////////////////s

// var arr = [1, 2, 3, 4, 5];
// const mapOriginal = arr.map((crr, index, array) => {
//   console.log({ crr: crr * 10, index, array });
//   return crr * 10;
// });
// console.log(mapOriginal);

// Array.prototype.myMap = function (callback) {
//   const returnNewArray = new Array();
//   for (let i = 0; i < this.length; i++) {
//     const temp = callback(this[i], i, this);
//     returnNewArray.push(temp);
//   }
//   return returnNewArray;
// };

// console.log(
//   arr.myMap((crr, index, array) => {
//     console.log({ crr, index, array });
//     return crr * 100;
//   })
// );
////////////////////////////////////////////////////////////////////////////////////////////////////s

// var arr = [1, 2, 3, 4, 5, 6, 7, 100];

// console.log(arr.filter((curr) => curr < 5));

// Array.prototype.myFilter = function (callback) {
//   const returnNewArray = [];
//   for (let i = 0; i < this.length; i++) {
//     let temp = callback(this[i], i, this);
//     temp && returnNewArray.push(this[i]);
//   }
//   return returnNewArray;
// };

// console.log(arr.myFilter((curr) => curr > 5));

////////////////////////////////////////////////////////////////////////////////////////////////////s

// var arr = [1, 2, 3, 4, 5, 6, 7, '100', {}];

// // console.log(arr.find((crr) => crr === 5));

// Array.prototype.myFind = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     let temp = callback(this[i]);
//     if (temp) {
//       return this[i];
//     }
//   }
//   return undefined;
// };

// console.log(arr.myFind((crr) => crr === 50));
////////////////////////////////////////////////////////////////////////////////////////////////////s

// let arr = [1, 1, 1, 1, 1, 1000, 5];

// console.log(
//   arr.reduce((acc, crr) => {
//     acc = acc + crr;
//     return acc;
//   }, {})
// );

// Array.prototype.myReduce = function (callback, initaAcc) {
//   let temp = initaAcc;
//   for (let i = 0; i < this.length; i++) {
//     const callBackVal = callback(temp, this[i]);
//     temp = callBackVal;
//   }
//   return temp;
// };

// console.log(
//   arr.myReduce((acc, crr) => {
//     acc = acc + crr;
//     return acc;
//   }, {})
// );
////////////////////////////////////////////////////////////////////////////////////////////////////s

// compose processes funs right to left (first mul tha add)

// const compose = function (...fns) {
//   let totalFns = fns.length;
//   return function (...args) {
//     let result;
//     for (let i = totalFns - 1; i >= 0; i--) {
//       const fn = fns[i];
//       if (i === totalFns - 1) {
//         result = fn(...args);
//         result;
//       } else {
//         result = fn(result);
//         result;
//       }
//     }
//     return result;
//   };
// };

// const mul5 = (a, b) => a * b;
// const add5 = (a) => a + 5;
// const div3 = (a) => a / 3;

// console.log(compose(div3, add5, mul5)(2, 5));

// const pipe = function (...fns) {
//   let totalFns = fns.length;
//   return function (...args) {
//     let result;
//     for (let i = 0; i < totalFns; i++) {
//       const fn = fns[i];
//       if (i === 0) {
//         result = fn(...args);
//         result;
//       } else {
//         result = fn(result);
//         result;
//       }
//     }
//     return result;
//   };
// };

// const mul5 = (a, b) => a * 2; //20
// const add5 = (a) => a + 5; //10
// const div3 = (a) => a / 3; //5

// console.log(pipe(div3, add5, mul5)(15));

const pipeWithReduce = (...fns) => {
  return (args) => fns.reduce((acc, crr) => (acc = crr(acc)), args);
};

const mul5 = (a, b) => a * 2; //20
const add5 = (a) => a + 5; //10
const div3 = (a) => a / 3; //5
console.log(pipeWithReduce(div3, add5, mul5)(15));

// const ComposeWithReduceRight = (...fns) => {
//   return (args) => fns.reduceRight((acc, crr) => (acc = crr(acc)), args);
// };

// const mul5 = (a, b) => a * 2; //20  // 30
// const add5 = (a) => a + 6; //10     // 36
// const div3 = (a) => a / 3; //5      // 12
// console.log(ComposeWithReduceRight(div3, add5, mul5)(15));
