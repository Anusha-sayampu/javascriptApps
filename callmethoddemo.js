//call method
const productinfo = {
  pdetails: function (rating, price) {
    return this.pid + " " + this.pname + " " + rating + " " + price;
  },
};
const product = {
  pid: 1001,
  pname: "iphone",
};
console.log(productinfo.pdetails.call(product, 4.5, 100000));
