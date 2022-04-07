const addOrSubtractNumbers = (num1, num2, operationType) => {
  if (operationType === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

const addOrSubtractNumbersAndThenDoSomething = (num1, num2, operationType, action) => {
  let result = 0;
  if (operationType === "add") {
    result = num1 + num2;
  } else {
    result = num1 - num2;
  }
  action(result, operationType);
};

console.log(addOrSubtractNumbers(5, 5, "add"));

addOrSubtractNumbersAndThenDoSomething(10, 11, "subtract", (result) =>
  console.log(result)
);

const showResult = (result, operationType) =>
  console.log(`The result of ${operationType} is ${result}`);

addOrSubtractNumbersAndThenDoSomething(10, 11, "subtract", showResult);

const someArray = [1, 2, 3];

const showBigDescription = (value, index, array) => {
  console.log(`The ${value} is at index ${index} in the array ${array}`);
};

someArray.forEach((value) => console.log(value));
someArray.forEach(showBigDescription);

// () => console.log("TRY TO RUN ME MWAHAHAHAHAH")
