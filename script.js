function attachEventListeners() {
  let i = 0;
  document.getElementById('btn').addEventListener('click', function clickFunc() {
    console.log('btn click', ++i);
  });
}

attachEventListeners();
