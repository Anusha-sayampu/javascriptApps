const student_details = () => {
  console.log("studentinfo");
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    console.log(roll_no);
    setTimeout(
      (roll_num) => {
        const data = { name: "john", qualification: "btech" };
        console.log(
          `name is ${data.name} qualification is ${data.qualification} roll_no ${roll_num}`
        );
      },
      2000,
      roll_no[1]
    );
  }, 2000);
};
student_details();
