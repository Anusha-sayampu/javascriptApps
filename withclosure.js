//with closure
const counterresult = (() => {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
console.log(counterresult());
console.log(counterresult());
console.log(counterresult()); //selfinvoking function
