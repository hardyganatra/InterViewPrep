<div align="left">
  <a href="/README.md##javaScript-modern-interview-code-challenges-by-topic" id="home">Home</a>
</div>

## JavaScript Basic Concepts

1. [What is Execution Context](#01)
2. [What is Hoisting](#02)
3. [How Does a Functionn Work in JavaScript](#03)

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

- Just remember one thing whatever variables we have inside function blocks are altogether different copies witih every execution context be it functional or global we get this object
