//callback function as anonanymous function
let prices = [20000, 30000, 50000, 40000];
const new_prices = prices.map((val) => {
  return val - 5000;
});
console.log(new_prices);
//callback function with name
function sample() {
  console.log("Hi");
}
function demo(callback) {
  return callback;
}
demo(sample());
