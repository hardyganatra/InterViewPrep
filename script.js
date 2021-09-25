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
