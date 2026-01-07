//bind method
const movieinfo = {
  mdetails: function () {
    return this.hname + " " + this.vname;
  },
};
const pushpa = {
  hname: "alluarjun",
  vname: "fahadh fassil",
};
let result = movieinfo.mdetails.bind(pushpa);
console.log(result());
