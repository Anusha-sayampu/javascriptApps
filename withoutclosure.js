//without closure
let counter = 1; //global variable
const counterresult = () => {
  let counter = 0; //local variable
  counter += 1;
  return counter;
};
console.log(counterresult());
console.log(counterresult());
console.log(counterresult());
