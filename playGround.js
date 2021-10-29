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

const stocks = ['FN9382', 2, 3, 5];
const wareHouses = ['SOUTH', 'SOUTH_EAST'];

function prepInvoiceLine(stockID) {
  //some check code
  console.log(stockID);
  if (!stocks.includes(stockID)) {
    throw Error('Stock not present');
  }

  return (warehouseID) => {
    //some check code
    if (!wareHouses.includes(warehouseID)) {
      throw Error('wareHouseId not present');
    }
    return (stockDeduct) => {
      //some check code
      return stockID + ' from ' + warehouseID + ' is reduced by ' + stockDeduct;
    };
  };
}

let orderItem298 = prepInvoiceLine('FN9382')('SOUTH')(2);

console.log(orderItem298);
