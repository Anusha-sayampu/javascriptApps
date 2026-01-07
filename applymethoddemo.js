//apply method
const studentinfo = {
  sdetails: function (qualification, marks) {
    return this.sno + " " + this.sname + " " + qualification + " " + marks;
  },
};
const student = {
  sno: 100,
  sname: "anusha",
};
console.log(studentinfo.sdetails.apply(student, ["b.tech", 500]));
