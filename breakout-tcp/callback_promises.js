const fridge = {
  "☕": 2,
};

const fetchFromFridge = (item, callbackSuccess, callbackFailure) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callbackSuccess(item);
    } else {
      callbackFailure(item);
    }
  }, 1000);
};

const fetchFromFridgePromise = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(item);
      } else {
        reject(item);
      }
    }, 1000);
  });
};

const fetchFromFridge2 = (item, callback) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback(item, true);
    } else {
      callback(item, false);
    }
  }, 1000);
};

const success = (item) => {
  fridge[item] = fridge[item] - 1;
  console.log(fridge);
};

const failure = () => {
  console.log("Sadness, you fell.");
};

fetchFromFridgePromise("☕")
  .then(success)
  .then(() => fetchFromFridgePromise("☕"))
  .then(success)
  .then(() => fetchFromFridgePromise("☕"))
  .then(success)
  .then(() => fetchFromFridgePromise("☕"))
  .then(success)
  .then(() => fetchFromFridgePromise("☕"))
  .then(success)
  .then(() => fetchFromFridgePromise("☕"))
  .then(success)
  .then(() => fetchFromFridgePromise("☕"))
  .then(success)
  .catch(failure);

// fetchFromFridge("☕", item => {
//   fetchFromFridge("☕", item => {
//     fetchFromFridge("☕", success, failure);
//   }, failure);
// }, failure);

const someArray = [1, 2, 3, 4, 5];

someArray.forEach((number) => console.log(number));
