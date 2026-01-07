const bubblegame = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10) + 1;
  if (num >= 5) {
    resolve("high score");
  } else {
    reject("low score");
  }
});
bubblegame
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
