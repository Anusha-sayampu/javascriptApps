//asyncawait logic
let movierating = () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;
    if (rating > 4) {
      resolve("good movie");
    } else {
      resolve("waste of our time");
    }
  });
};
//how to call promises with async await
const movieresult = async () => {
  try {
    const result = await movierating();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
movieresult();
