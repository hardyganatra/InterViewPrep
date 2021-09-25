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

> console.log(i) inside seTimeout remembers and referes to the same global REFERENCE this proves it remembers reference and not value of i (var i is a global variable ) so each 5 setTomeout functions points to same i

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
