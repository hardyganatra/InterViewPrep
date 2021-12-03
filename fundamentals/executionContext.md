<div align="left">
  <a href="/README.md##javaScript-modern-interview-code-challenges-by-topic" id="home">Home</a>
</div>

## JavaScript Basic Concepts

1. [What is Execution Context](#01)
2. [What is Hoisting](#02)
3. [How Does a Functionn Work in JavaScript](#03)
4. [Difference between undefined and not Defined](#04)
5. [SCOPE CHAIN IN JS](#05)
6. [Understanding let and const](#06)
7. [Understanding CLOSURES](#07)
8. [Different Varieties of Functions in JavaScript](#08)
9. [Understanding CALLBACKS](#09)
10. [Understanding EventLoop](#10)
11. [Higher order functions](#11)
12. [Map Filter Reduce](#12)
13. [What is pure functions](#13)
14. [What is Idempotent function and imperative Vs Declarative](#14)
15. [What is Immutability](#15)
16. [call apply bind](#16)
17. [Function currying](#17)
18. [Polyfills for forEach , map , filter , find , reduce](#18)
19. [Compose and Pipe](#19)
20. [Prototype](#20)
21. [Debounce](#21)
22. [Throttle](#22)
23. [Promises basics](#23)
24. [CallBack Hell > Promises > async await](#24)
25. [Execution of three async call one after another](#25)
26. [Promise API](#26)
27. [RollerCodester This](#27)

    // currying , partial application , memoization
    // Prototype
    //polyfill of bind

---

##### 01

##### What is Execution Context

- Every thing in JavaScript happens Inside Execution Context, Execution Context has 2 components memory component(variable

  Enviornment) and code component(Thread of Execution)

- As soon as javaScript Code starts running lot of things happen inside JavaSript Engine
  1. Global Execution Context is created (having memory and code component)
  2. Execution context is created in 2 phases
  - Memory Creation Phase
  - Code Execution Phase
  ###### Memory Creation Phase
  - JavaScript assigns memory to all variable and functions , for variables the value it stores is undefined and for functions it stores the entire code in function block
  ###### Code Execution Phase
  - If there is variable assignment (var a = 3) it does that
  - if there is function invocation (function name with parenthesis sayCongrats() ) a brand new execution context is created with again memory allocation and code execution (memory allocated for params and other vars)
    important > when seeing return keyword engine returns the control at the pont where the function was invoked
    and execution context is deleted
  - Once last line of program is executed the global execution context is also popped off the stack

##### 02

##### What is Hoisting

- Functions (in case of function declaration where engine sees function as first word) can be invoked even before they are defined why , because in momory allocation phase their memory(actual code block) is already assigned and also for var keyward memory is allready assigned with undefined

- FUNCTION DECLARATION >>

```js
//compiler sees first word as function
function sayCongrats() {}
```

- FUNCTION EXPRESSION >>

```js
//compiler sees first word as function
let myFunc = function sayCongrats() {}
let myArrow = () => ()
```

##### 03

##### How Does a Function Work in JavaScript

- Just remember one thing whatever variables we have inside function blocks are altogether different copies.

##### 04

##### Difference between undefined and not Defined

- JavaScript allocates memory to the program variables even before executing the program (and memory value it assigns value as undefined for variables) if a certain variable is altogether not there in the program (JavaScript will not allocate memory to it) than it is undefined

- Remember JavaScript is loosely typed we need not tell Js okay this variable will only hold Int / float / Boolean , what wever we assign javaScript changes dataType to that

##### 05

##### SCOPE CHAIN IN JS

- Definition of scope is simple where can you access a variable . Scope concept is directly related to lexical enviornment => Lexical enviornment is local memory + lexical enviornment of its parent ,
  lexical enviornment is created when an execution context is created (function is invoked)
  just a simple trick in callstack first thing to go in is global execution stack then one by one as new new function executes its execution context are created and pushed on top of call stack and if a variable is not presednt in a certain execution context it can go below to find till global but it cannot go up to check like for example if some variable is declared in function and it is console.log in global space we cannot go up and check => this is nothing but scope chain

  play around with below check call stack and click on it to check the scope values

```js
//compiler sees first word as function
function test() {
  var a11 = 20;
  inner();
  function inner() {
    console.log(a11);
  }
}

test();
```

##### 06

##### Understanding let and const

- first are let and cosnst hoisted ?

  - Answer is they are hoisted but ther are in temporal dead zone
    temporal dead zone === time difference between when the let variable was hoisted till it is initialized a value if you access let in this time frame you will get error
    Reference Error , cannot access variable before initialization

  ```js
  console.log(a);
  let a;
  //if you check in browser you will get a: undefined but these are inside script and not global object
  // let variables are not attached to window object they are in different memory space (script)
  ```

  - you cannot even redeclare let variables

- underatanding const
  Behaves same in hoisting but little more strict than let you have to initialize on declaration and thats the final value it will hold for its entire life span

  ###### Understanding block Scope

  - let and const are blocked scope
  - block is noththng but a pair of curly braces in JavsScript ==> {}
    consider

    ```js
    {
      const a = 10;
      var b = 1000;
    }
    const c = 30;
    ```

    if you check in browser Scope

    > a is inside block scope
    > b is on global object
    > c is inisde script tag

    - you will not able to access a outside the braces
    - block scopes also follows lexical scope ie if there is block inside block it first checks in own block than it goes up checks till global scope

##### 07

##### Understanding CLOSURES

- A function bundled together with its lexical enviornment in simple terms
  if there is a function (inner) which is inside another function(outer) and the inner accesses some variables of outer than there is a
  closure()outer that is formed simple

```js
// this is a closure
function outer() {
  var a = 10;
  inner();
  function inner() {
    console.log(a);
  }
}

outer();

// but not this

var a = 10;
function outer() {
  inner();
  function inner() {
    console.log(a);
  }
}

outer();

//because inner uses nothing of outer
```

Classics of Closure

```js
// var a = 10;
function outer() {
  var x = 10;
  function inner(a) {
    console.log(x);
  }
  return inner;
}

let closurefunc = outer();

check below understanding and then continew

closurefunc(20);
```

###### uderstanding

- At this point since you have executed outer its altogether not there in callstack its popped off so the question is it has returned innner (a closure was returned not only inner) now how inner will behave in other execution context (i-e whether the returned function is executed in global space or inner is executed inside any other space it will remember that x is 10 (x is not garbage collected by js Enjine and also remember closure remembers the reference and npt actual value like it will remember what x is pointing to here it is 10) ) will it remember x = 10 always yes brother it will because closures are beautiful it remembers the scoped variables

###### Interview Questions on closures

- basic closure with setTimeout

```js
function outer() {
  var i = 10;
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
outer();
```

- remember setTimeout does not execute exactly after var i = 10 it is a webApi method and executes seperately javaScript does not wait for it to execute it moves forward to next line. once setTimeout is ready with its
  o/p and call stack is empty it is then executed

##### Question >> Print 0 to 5 each after 1 second

wrong solution

```js
function outer() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
outer();
```

> console.log(i) inside seTimeout remembers and referes to the same global REFERENCE this proves it remembers reference and not value of i (var i is a global variable ) so each 5 setTimeout functions points to same i

- solution 01
  - - change var to let so when let changes each setTimeout function will get new fresh incremented copy of i

```js
function outer() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
outer();
```

- solution 02 - if you are not allowed to change var to let we use IIFE

  ```js
  function outer() {
    for (var i = 0; i < 5; i++) {
      (function execute() {
        var temp = i;
        setTimeout(() => {
          console.log(temp);
        }, i * 1000);
      })();
    }
  }
  outer();
  ```

- solution 03 - if lets say even IIFE is not allowed
  - This solutio we understand that the solution lies in setTimeout should not refer to var i of for loop

```js
function outer() {
  for (var i = 0; i < 5; i++) {
    function closure(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    closure(i);
  }
}
outer();
```

##### 08

##### Different Varieties of Functions in JavaScript

- ##### What is function Statement
  - function Statement is same as function Declaration both are interchangable terms
  ```js
  function a() {}
  ```
- ##### What is function Expression
  ```js
  var b = function a() {};
  ```
  - ##### Difference between function Statement && function Expression

###### Hoisting (function Statement entire function block is hoisted whereas in function Expression only the variable is hoisted)

- ##### What is Anonymous function

```js
var b = function a() {};
```

- ##### What is named function Expression

```js
var b = function a() {};
// remember you cannot call a() , but below is possible
var b = function a() {
  a();
};
// reason being a is not declared in outer/ global scope it is basically a varable only acccessed by functions
```

- ##### DIfference between params and arguments

```js
var b = function a(param1, param2) {};
b(arg1, arg2);
```

- ##### What are first class functons
  - Ability to use functions as values is known as first class functions also known as first class citizens
    In JS we can pass functions inside another in arguments and also we can return a function from a function
    Basically can be treated as values in JS

```js
var b = function a(param1, param2) {
  return param2;
};
b(arg1, function () {});
```

- ##### Arrow Functions

```js
var b = () => {};
```

##### 09

##### Understanding CALLBACKS

- Callbacks are nothing but functions which are passed inside another functions and executed at a later point in time
  for example setTimeout has a callback executed after certain specified milliseconds

##### Question > create a button and on the click of that print the time it was clicked

- Solution 01

      ```js
      let i = 0;

  document.getElementById('btn').addEventListener('click', function clickFunc() {
  console.log('Btn Clicked', ++i);
  });

  ```

  ```

- Cannot use let i = 0 because if somewhere else in program if i change i logic fails so we need to use closure

```js
function attachEventListeners() {
  let i = 0;
  document
    .getElementById("btn")
    .addEventListener("click", function clickFunc() {
      console.log("btn click", ++i);
    });
}

attachEventListeners();
```

##### It is said we need to remove / clear event listeners Why

- Event listeners are heavy they are not garbage collected once closures are formed it can take aloot of space

##### 10

##### Understanding EventLoop

- First if all as we understand we have call stack managed by JavaScript Engine and for all the other fancy stuff like

  > Access to DOM
  > Fetch API
  > Timer
  > Location
  > Bluetooth
  > Console.log
  > ...etc
  > This is provided to use by BROWSERS Web API which we can access through the window object

- Lets say there is a timer we set using setTimeout what happens is when js sees the setTimeout it gives this to webApi and moves on to next line javascript does not wait for timer to execute , if there is no code left the Global xec context is popped of
- Than when time specefied in setTimeout is over somehow the callback mentioned in setTimeout should be popped inside callstack for it to be
  executed by JS , bacoz JS engine can only execute code present in call stack.

###### --- HERE COMES CALLBACK QUEUE AND EVENT LOOP

- The callback does not come directly it comes in via callback queue , callback queue works in FIFO manner and now the Job of EVENT LOOP is check the callback queue and push the functions inside callback queue back to Call stack so that JS can run those

###### --- MICROTASK QUEUE

- When there are promises (fetch) and all the calbacks are not pushed into callback queue but they are pushed to MICROTASK QUEUE
- Mutation Observer (change in DOM Tree) callbacks goes inside micro task queue
- MICROTASK QUEUE Greater priority than CALLBACK QUEUE

###### --- What is Starvation inside call back queue

- When there are large number of fetch callbacks or mutation observer tasks the one sitting inside callback queue does not get a chance
  to execute basically it starvs

##### 11

###### --- Higher order functions

- A function which takes another function as an argumentb or returns another function is known as higer order function
  cosnider below example

```js
const AreaArray2 = [];
const radius = [1, 10, 100];
function genericIterate(logic) {
const newArray = new Array();
for (let i = 0; i < radius.length; i++) {
newArray.push(logic(radius[i]));
}
return newArray;
}
function logic(r) {
return Math.PI _ r _ r;
}
function logicInto2(r) {
return 2 _ Math.PI _ r * r;
}
Array.prototype.iterate = genericIterate;
console.log(radius.iterate(logicInto2));
```

```js
1)
const HOC = () => ()=> 5
HOC()()

2)

const HOC = (fn) => fn()
fn = () => 5
HOC(fn)


```

##### 12

###### --- Map Filter Reduce

funcrtion myfunction(data){

  <!-- called for avery index of an array and each index we get here as data -->

}

- Array.map(myfunction)
  map is always one to one mapping and will always return a new array
  you can do anything with mapped value (mul by 2 , convert it to object anything)

  ```js
  const radius = [1, 10, 100];
  const into2 = (data) => {
    let rObj = {};
    rObj[data] = data;
    return rObj;
  };
  console.log(radius.map(into2));
  ```

- Array.filter(myfunction)
  filter will always return a new array depending on condition written in myFunction

  ```js
  const radius = [1, 5, 7, 10, 100];
  const removeLessThan10 = (data) => {
    return data >= 10;
  };
  console.log(radius.filter(removeLessThan10));
  ```

- Array.reduce((acc , crr)=>{},acc_initial_Value)
  Always remember reduce always reduces to 1 single value based on the calculation you do inside function

  ```js
  const users = [
    { name: "Hardik", lastName: "ganatra", age: 25 },
    { name: "Virat", lastName: "Kohli", age: 32 },
    { name: "Elon", lastName: "musk", age: 45 },
    { name: "Forum", lastName: "musk", age: 25 },
    { name: "lara", lastName: "musk", age: 45 },
    { name: "Rohit", lastName: "musk", age: 33 },
  ];
  console.log(
    users.reduce((acc, crr) => {
      if (acc[crr.age] >= 0) {
        acc[crr.age] = acc[crr.age] + 1;
      } else {
        acc[crr.age] = 1;
      }
      return acc;
    }, {})
  );
  ```

##### 13

###### --- What is pure function

- A function which only works on the inputs and does some computation ans returns an output is known as pure Function
- Always gives same output for same inputs
- should not have side effects (working with external reference types , calling http request)

##### 14

###### --- What is Idempotent function and imperative Vs Declarative

- Imperative means informing Each and Every Step to Perform (what to do and how to do)
- Declarative means (what to do and what shpuld happen)
  for loop is imperative whareAs Array.forEach is declarative
  jQuery is imperative React is declarative

Idempotent function => Its not pure it has side effects but produces same o/p each and every time

```js
function log() {
  console.log("Data logged");
}
```

##### 15

###### --- What is Immutability

- Immutability => Not changing the data , not changing the state but instead making copies of the state making changes to copies and
  returning new state

##### 16

###### --- Call apply and Bind

- Call
  - write a function once and than reuse for multiple objects , the first argument is( object you want to pass as this )
    and rest are the arguments for the function

```js
function printFullName(street) {
  return `${this.firstName} ${this.lastName} ${street}`;
}
const Name = {
  firstName: "Hardik",
  lastName: "Ganatra",
};
const Other = {
  firstName: "ELon",
  lastName: "Musk",
};
console.log(printFullName.call(Name, "vasai"));
console.log(printFullName.call(Other));
```

- Apply

  - Exactly same as call just you pass 2nd Argument as an array
    consider above example
    with
    ```js
    console.log(printFullName.apply(Name, ["vasai"]));
    ```

- Bind
  - Exactly same as the call method but just on eminor difference it returns a function which can be called later
    ```js
    console.log(printFullName.bind(Name, "vasai")());
    ```

##### 17

###### --- What is Function Currying

- Book Definition is
  currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument (partial application).

```js
// Example no 01
let multiply = function (x, y) {
  return x * y;
};

let multiplyBy2 = multiply.bind(null, 2);
// let multiplyBy2 = multiply.bind(null, 2 , 2); >>> if you do this this is not currying answer will always be 4 x = 2 , y = 2
let multiplyBy100 = multiply.bind(null, 100);

console.log(multiplyBy2(5));
console.log(multiplyBy100(5));

const multiplyClosureGeneric = function (x) {
  return function (y) {
    return x * y;
  };
};

const multiplyClosureGeneric = (x) => (y) => x * y;

let multiplyBy2 = multiplyClosureGeneric(2);
console.log(multiplyBy2(5));
let multiplyBy100 = multiplyClosureGeneric(1000);
console.log(multiplyBy100(5));
```

```js
// Example no 02
const stocks = ["FN9382", 2, 3, 5];
const wareHouses = ["SOUTH", "SOUTH_EAST"];

function prepInvoiceLine(stockID) {
  //some check code
  console.log(stockID);
  if (!stocks.includes(stockID)) {
    throw Error("Stock not present");
  }

  return (warehouseID) => {
    //some check code
    if (!wareHouses.includes(warehouseID)) {
      throw Error("wareHouseId not present");
    }
    return (stockDeduct) => {
      //some check code
      return stockID + " from " + warehouseID + " is reduced by " + stockDeduct;
    };
  };
}

let orderItem298 = prepInvoiceLine("FN9382")("SOUTH")(2);

console.log(orderItem298);
```

##### 18

###### --- Polyfills for forEach , map , filter , find , reduce

- forEach polyfill

```js
var arr = [1, 2, 3, 4, 5];
arr.forEach((val, index, array) => {
  //   console.log({ val }, { index }, { array });
});

//  forEach polyfill

Array.prototype.myForEach = function (callback) {
  //   console.log(this);

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((val, index, array) => {
  console.log({ val, index, array });
});
```

- map polyfill

```js
var arr = [1, 2, 3, 4, 5];
const mapOriginal = arr.map((crr, index, array) => {
  console.log({ crr: crr * 10, index, array });
  return crr * 10;
});
console.log(mapOriginal);

Array.prototype.myMap = function (callback) {
  const returnNewArray = new Array();
  for (let i = 0; i < this.length; i++) {
    const temp = callback(this[i], i, this);
    returnNewArray.push(temp);
  }
  return returnNewArray;
};

console.log(
  arr.myMap((crr, index, array) => {
    console.log({ crr, index, array });
    return crr * 100;
  })
);
```

- filter polyfill

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 100];

console.log(arr.filter((curr) => curr < 5));

Array.prototype.myFilter = function (callback) {
  const returnNewArray = [];
  for (let i = 0; i < this.length; i++) {
    let temp = callback(this[i], i, this);
    temp && returnNewArray.push(this[i]);
  }
  return returnNewArray;
};

console.log(arr.myFilter((curr) => curr > 5));
```

- find pilyfill

```js
var arr = [1, 2, 3, 4, 5, 6, 7, "100", {}];

// console.log(arr.find((crr) => crr === 5));

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let temp = callback(this[i]);
    if (temp) {
      return this[i];
    }
  }
  return undefined;
};

console.log(arr.myFind((crr) => crr === 50));
```

- Reduce polyfill

```js
let arr = [1, 1, 1, 1, 1, 1000, 5];

console.log(
  arr.reduce((acc, crr) => {
    acc = acc + crr;
    return acc;
  }, {})
);

Array.prototype.myReduce = function (callback, initaAcc) {
  let temp = initaAcc;
  for (let i = 0; i < this.length; i++) {
    const callBackVal = callback(temp, this[i]);
    temp = callBackVal;
  }
  return temp;
};

console.log(
  arr.myReduce((acc, crr) => {
    acc = acc + crr;
    return acc;
  }, {})
);
```

##### 19

###### --- Compose and Pipe

- Compose > is function which takes in multiple function and executes from right to left sending each function the o/p of previous one
  - basically a conveyer belt of functions where result of one is input to other

```js
compose processes funs right to left (first mul tha add)

const compose = function (...fns) {
  let totalFns = fns.length;
  return function (...args) {
    let result;
    for (let i = totalFns - 1; i >= 0; i--) {
      const fn = fns[i];
      if (i === totalFns - 1) {
        result = fn(...args);
        result;
      } else {
        result = fn(result);
        result;
      }
    }
    return result;
  };
};

const mul5 = (a, b) => a * b;
const add5 = (a) => a + 5;
const div3 = (a) => a / 3;

console.log(compose(div3, add5, mul5)(2, 5));
```

Note - Try using reduceRIght for comose and reduce for pipe

- Pipe > pipe is exactly same as compose it just executes functions left to right

```js
const pipe = function (...fns) {
  let totalFns = fns.length;
  return function (...args) {
    let result;
    for (let i = 0; i < totalFns; i++) {
      const fn = fns[i];
      if (i === 0) {
        result = fn(...args);
        result;
      } else {
        result = fn(result);
        result;
      }
    }
    return result;
  };
};

const mul5 = (a, b) => a * 2; //20
const add5 = (a) => a + 5; //10
const div3 = (a) => a / 3; //5

console.log(pipe(div3, add5, mul5)(15));
```

````js
const pipeWithReduce = (...fns) => {
  return (args) => {
    return fns.reduce((acc, crr, index) => {
      acc, crr, index;
      if (index === 0) {
        acc = args;
      }
      acc = crr(acc);
      acc;
      return acc;
    }, 0);
  };
};

const mul5 = (a, b) => a * 2; //20
const add5 = (a) => a + 5; //10
const div3 = (a) => a / 3; //5
console.log(pipeWithReduce(div3, add5, mul5)(15));

const ComposeWithReduceRight = (...fns) => {
  const len = fns.length;
  return (args) => {
    return fns.reduceRight((acc, crr, index) => {
      acc, crr, index;
      if (index === len - 1) {
        acc = args;
      }
      acc = crr(acc);
      acc;
      return acc;
    }, 0);
  };
};

const mul5 = (a, b) => a * 2; //20  // 30
const add5 = (a) => a + 6; //10     // 36
const div3 = (a) => a / 3; //5      // 12
console.log(ComposeWithReduceRight(div3, add5, mul5)(15));

// MORE SIMPLIFIED

// Arraw used and acc initial value as args

const pipeWithReduce = (...fns) => {
  return (args) => fns.reduce((acc, crr) => (acc = crr(acc)), args);
};

const mul5 = (a, b) => a * 2; //20
const add5 = (a) => a + 5; //10
const div3 = (a) => a / 3; //5
console.log(pipeWithReduce(div3, add5, mul5)(15));

const ComposeWithReduceRight = (...fns) => {
  return (args) => fns.reduceRight((acc, crr) => (acc = crr(acc)), args);
};

const mul5 = (a, b) => a * 2; //20  // 30
const add5 = (a) => a + 6; //10     // 36
const div3 = (a) => a / 3; //5      // 12
console.log(ComposeWithReduceRight(div3, add5, mul5)(15));
```

````

##### 20

###### --- Prototype

- When ever we create let say an object or lets say an array js
  attaches an object to that which can be accessed by objName.**proto**

lets say

```js
const arr = [1234];
now arr.__proto__ = some object which has fucntions like map and forEach
and also Array.prototype = same like above object

now since above is alse sn object it also has __proto__ attached to it

now arr.__proto__.__proto__ = some object which has properties exactly equal to

Object.prototype

which proves arrays are objects

now arr.__proto__.__proto__.__proto__ is null

const obj1 = {
  speed : "200000"
}
const obj2 = {
  name : "Hardik"
}
obj2.__proto__ = obj1

console.log(obj2.speed) // 20000

```

##### 21

###### --- Debounce

Used to limit the rate at which the function is invoked
let say we click something we attach a timer which will make the function run only after let say 300 i-e 0.3 ms , if you try to again ivnoke the function it will clear the earlier timer and start a new timer so in that way we are not calling he heavy functin again and again

Debouncing is a practice which is used to improve browser performance.
A programming practice which ensure that time-consuming tasks do not fire so often.
It is used to limits the rate at which a function gets invoked.

```js
const display = () => console.log("fn called");

const bounced = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

const obtimisedDisplay = bounced(display, 1000);
for (let index = 0; index < 5; index++) {
  obtimisedDisplay();
  display();
}
```

##### 22

###### --- Throttle

Throttle means sakti , how many times you call a function it will only be called once in a given time frame

```js
const display = () => console.log("HI there");
const throttle = (fn, delay) => {
  let timerIsOn;
  return function () {
    if (!timerIsOn) {
      timerIsOn = true;
      setTimeout(() => {
        timerIsOn = false;
        fn.apply(this, arguments);
      }, delay);
    }
  };
};

const optimesedDisplay = throttle(display, 2000);
for (let index = 0; index < 5; index++) {
  display();
  optimesedDisplay();
}
```

##### 23

###### --- Promises

- Used to handle Asynchronous operation in JS

```js
let myProm = new Promise((resolve, reject) => {
  let flag = true;
  flag ? resolve("success") : reject("fail");
});

myProm.then(
  (data) => console.log(data),
  (data) => console.log(data)
);
```

##### 24

###### --- CallBack Hell

- let say we have an icecream parlour where first the order is placed and later the production is started and icecream is propared.
  now each step takes some amount of time to complete

using Callbacks

```js
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
let order = (fruitName, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[0]} is selected fruit`);
    call_production();
  }, 2000);
};
let production = () => {
  console.log("production started");
  setTimeout(() => {
    console.log("water and ice added");
    setTimeout(() => {
      console.log("machine started");
      setTimeout(() => {
        console.log("container selected");
      }, 2000);
    }, 1000);
  }, 1000);
};
order(0, production);
```

- Promises has three states , pendng resolve rejected

```js
let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else reject("Sorry Sir !! Our Shop is closed");
  });
};

order(2000, () => console.log("Strabberry selected"))
  .then(() => {
    console.log("production started");
  })
  .then(() => {
    return order(2000, () => console.log("cut the fruit"));
  })
  .then(() => {
    return order(2000, () => console.log("add water and ice"));
  })
  .then(() => {
    return order(1000, () => console.log("Select Container"));
  })
  .then(() => {
    return order(3000, () => console.log("IceCream prepared and served"));
  })
  //catch runs only if promise is rejected
  .catch(() => console.log("NO ICECREAM Customer Go gone"))
  // no matter is promise is fullfilled or rejected finnally runs
  .finally(() => {
    console.log("shutter down");
  });
```

- so promise blue print is

```js
let order = () => {
  return new Promise((resolve, rejected) => {
    if (true) {
      resolve();
    } else {
      rejected();
    }
  });
};

order()
.then()
.then()
.then()
.then()
.catch()
.finally(
```

- Using async await

```js
let order = async () => {
  try {
    await abc;
  } catch (error) {
    console.log("abc not exists", error);
  } finally {
    console.log("I always run");
  }
};

order().then(() => console.log("do what ever"));
```

```js
const getData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  console.log(data);
  console.log("prints only after res");
};
getData();
console.log("JS waits for none");

const withPromises = () => {
  return fetch("https://jsonplaceholder.typicode.co/posts");
};
console.log(
  withPromises()
    .then((d) => d.json())
    .then((d) => console.log(d))
    .catch((error) => {
      console.log("this is an error", error);
    })
);
```

##### 25

###### --- Execution of three async call one after another

```js
const p1 = async () => {
  setTimeout(() => {
    console.log("first executed");
    console.log("second started");
  }, 1000);
};

const p2 = async () => {
  setTimeout(() => {
    console.log("second executed");
    console.log("third started");
  }, 3000);
};

const p3 = async () => {
  setTimeout(() => {
    console.log("third executed");
  }, 6000);
};

p1().then(() => p2().then(() => p3()));
```

##### 25

###### --- Promise Api

- There are 6 static methods of Promise class:

- Promise.all([promises]) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
- Promise.allSettled([promises]) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
  status: "fulfilled" or "rejected"
  value (if fulfilled) or reason (if rejected).
- Promise.race([promises]) – waits for the first promise to settle, and its result/error becomes the outcome.
- Promise.any([promises]) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
- Promise.resolve(value) – makes a resolved promise with the given value.
- Promise.reject(error) – makes a rejected promise with the given error.

##### 27

###### --- RollerCodester This

- The value of this is dependent upon where the this is located and
  how it is called

  - This in open (without functions)

  ```js
  console.log(this); //  value as window
  ```

  - This inside our old type if functions (not arrow)

  ```js
  function normalFunc(params) {
    return this;
  }
  console.log(normalFunc()); // value as window
  ```

  - This inside constructor function (called with new keyword)

    ```js
    function constFunc(params) {
      return this;
    }
    const ob1 = new constFunc();
    console.log(ob1); // points to the newly created objects and its properties
    ```

  - This inside function which is a part of object

    ```js
    console.log(myObj.printName()); // returns Hardik
    ```

    - called with object name

      ```js
      const myObj = {
        name: "Hardik",
        // here this is inside a function and the below function
        // can be called in multiple ways like directly calling with reference
        // to myObj.printName() or it can be assigned to a variable and later
        // invoked
        printName() {
          return this.name;
        },
      };
      ```

      - called with object name

      ```js
      console.log(myObj.printName()); // returns Hardik
      ```

    - Assigned to a variable and invoked later

      ```js
      let invokeLater = myObj.printName;
      console.log(invokeLater(), "invoke later"); // Does not return hardik (this points to window)
      ```

    - called with some reference using call keyword

    ```js
    console.log(invokeLater.call(myObj)); // returns Hardik
    ```

    ### ARROW FUNCTIONS

    Its said that arrow functions do not have their own this and
    arrow functions this points to the the the lexical enviornments this

    lets rock and roll with examples

    ```js
    const myArr = () => {
      return this;
    };

    console.log(myArr()); // returns window
    /*from above just in your mind remove  () => {
      return this;
    };
    and check what will be this outside that window right
     */
    ```

    - Consider below example , Tings will be much more clear

    ```js
    const myArr = () => {
      return this;
    };

    const oldFunc = function () {
      return this;
    };

    const myObjCheck = {
      arow: myArr,
      old: oldFunc,
    };
    console.log(myObjCheck.arow()); // returns window
    /* Reason being simple as above remove () => {
      return this;
    }; and check what will be this outside , it will be window correct  
    so we say arrow functions do not have their own this and the this points to lexical enviornments this 
    
    Now see below noemal functions work on logic we discussed previously
    */

    console.log(myObjCheck.old()); // returns {arow: ƒ, old: ƒ}
    ```

    - There is no affect of call , apply , bind in arrow functions as their this cannnot be changed

    - check below

      ```js
      console.log(myArr.call(myObjCheck)); // returns window

      // but for normal functions
      console.log(oldFunc.call(myObjCheck)); // returns {arow: ƒ, old: ƒ}
      ```

      - Behavior or arrow functions inside objects

        ```js
        const ipl = {
          iplThis: this,
          teams: ["KKR", "CSK", "MI"],
          printTeams: function () {
            return this.teams;
          },
          printTeamsWithArroe: function () {
            return () => {
              return this.teams;
            };
          },
        };

        // just keep this below thing in mind
        console.log(ipl.iplThis); //  window

        // now with normal functions

        console.log(ipl.printTeams()); // ['KKR', 'CSK', 'MI']

        // now with arrow functions

        console.log(ipl.printTeamsWithArroe()()); //['KKR', 'CSK', 'MI']
        ```

        lets just tweek printTeamsWithArroe a bit and convert that to arrow

        ```js
        const ipl = {
          iplThis: this,
          teams: ["KKR", "CSK", "MI"],
          printTeams: function () {
            return this.teams;
          },
          printTeamsWithArroe: () => {
            return () => {
              return this.teams;
            };
          },
        };

        // we print the same thing we printed above

        console.log(ipl.printTeamsWithArroe()()); // this rerurns undefined

        /* Reason is simple
        
        in your mind ignore 
        
        () => {
            return () => {
              return this.teams;
            };
          },
        
        and check the value of this out side we have already seen its 
        window , hence we get undefined
        
          */
        ```
