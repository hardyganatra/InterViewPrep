<div align="left">
  <a href="/README.md##javaScript-modern-interview-code-challenges-by-topic" id="home">Home</a>
</div>

## JavaScript Basic Concepts

1. [What us Execution Context](#01)

---

##### 01

##### What us Execution Context

- Every thing in JavsAcript Happens Inside Execution Context Execution Context has 2 components memory component(variable
  Enviornment) and code compoenent(Thread of Execution)
- As soon as javaScript Code starts running lot of things happen inside JavaSript Engine
  1. Global Execution Context is created (having memory and code component)
  2. Execution context is created in 2 phases
  - Memory Creation Phase
  - Code Execution Phase
  ###### Memory Creation Phase
  - JavaScript assigns memory to all variable and functions , for variables the value it stores undefined and for functions it stores the entire code in function block
  ###### Code Execution Phase
  - If there is variable assignment (var a = 3) it does that
  - if there is function invocation (function name with parenthesis sayCongrats() ) a brand new execution context is created with again memory allocation and code execution (memory allocated for params and other vars)
    important > when seeing return keyword engine returns the control at the pont where the function was invoked
    and execution context is deleted
  - Once last line of program is executed the global execution context is also popped off the stack
