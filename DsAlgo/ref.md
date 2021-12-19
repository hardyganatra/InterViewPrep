<div align="left">
  <a href="/README.md##javaScript-modern-interview-code-challenges-by-topic" id="home">Home</a>
</div>

## DS_AlGO

1. [Reverse a string without using revers() JavaScript method](#01)
2. [Find out if a string is a palindrome](#02)
3. [Reverse a integer and mantain the sign of it](#03)
4. [Find the biggest number of an occurrences in an array](#04)
5. [FizzBuzz algorithm](#05)

---

##### 01

##### Reverse a string without using revers() JavaScript method

```js
const reverse = ((input) => {
  const reversedStr = "";
  const strToArr = input.split("");
  console.log(
    strToArr.reduce((acc, crr) => {
      return crr + acc;
    }, reversedStr)
  );
})("Hardik Ganatra");
```

##### 02

##### Find out if a string is a palindrome

```js
function palindrome(str) {
  var len = str.length;
  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
```

##### 03

##### Reverse a integer and mantain the sign of it

```js
const reverse = ((num) => {
  const strNum = num.toString().split("").reverse().join("");
  const t = num < 0 && -1 * parseInt(strNum);
  console.log(t);
})(-2134);
```

##### 04

##### Find the biggest number of an occurrences in an array

```js
const arr = ["a", "b", "c", "a", "b", "c", "c"];

let value = 0;
let key = "";

const maxOccurance = (arr) => {
  const myObj = {};
  arr.forEach((element) => {
    let maxOccur = 0;
    if (myObj[element] >= 0) {
      myObj[element] = myObj[element] + 1;
    } else {
      myObj[element] = 0;
    }
  });
  for (let el in myObj) {
    if (myObj[el] > value) {
      value = myObj[el];
      key = el;
    }
  }
  return {
    key,
    value,
  };
};

console.log(maxOccurance(arr));
```

##### 04

##### FizzBuzz algorithm
