//debounce
//request data gathering logic
let button = document.getElementById("demo");
let clickresult = document.getElementById("sample");
let triggerresult = document.getElementById("simple");
//business logic
let clickcount = 0;
let triggercount = 0;
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}
const debounceresult = debounce(() => {
  triggercount++;
  triggerresult.innerHTML = `triggered :${triggercount}`;
}, 1000);
button.addEventListener("click", () => {
  clickcount++;
  clickresult.innerHTML = `user entered characters:${clickcount}`;
  debounceresult();
});
