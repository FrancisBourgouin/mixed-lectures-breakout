// What is async/await

// Syntax sugar
const someObj = new Object();
const someObjAgain = {};

// Asynchronous content

// 1- Callbacks
// 2- Promises

// somePromise()
//   .then(res => ...)
//   .then(res => ...)
//   .then(res => ...)
//   .then(res => ...)
//   .then(res => ...)
//   .catch(err => console.log(err))

// 2.1- Async Await (Promise sugar)

const somePromise = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return reject("SAD");
    }
    return resolve("HAPPY");
  });
};

const someAsyncFunction = async () => {
  try {
    const res = await somePromise();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

someAsyncFunction();

somePromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
