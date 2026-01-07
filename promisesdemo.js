//promises logic
const movierating = new Promise((resolve, reject) => {
  let rating = 4.5;
  if (rating > 4) {
    resolve("good movie");
  } else {
    reject("boss waste of our time");
  }
});
//call promises
movierating
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
