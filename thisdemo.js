//This
const empinfo = {
  efirstname: "anusha",
  elastname: "sayampu",
  efullname: function () {
    return this.efirstname + " " + this.elastname;
  },
};
console.log(empinfo.efullname());
