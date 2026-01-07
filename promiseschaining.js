//promises chaining
const ticketbooking = () => {
  return new Promise((resolve, reject) => {
    resolve("ticket booked");
  });
};
const popcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "get popcorn");
  });
};
const coke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "get coke");
  });
};
ticketbooking()
  .then((result) => {
    return popcorn(result);
  })
  .then((result) => {
    return coke(result);
  })
  .then((result) => {
    console.log("wanna go to movie" + result);
  })
  .catch((error) => {
    console.log("error");
  });
