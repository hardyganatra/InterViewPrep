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
