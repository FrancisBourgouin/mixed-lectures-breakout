// Normal function

const addAndShowResult = (num1, num2) => {
  console.log(num1 + num2);
};

// Higher Order Functions (They will not complete a task by themselves)

// 1- Needs a callback function to be complete
// 2- HOF will generate a function definition

const forEachElement = (list, action) => {
  for (const element of list) {
    action(element);
  }
};

const veryCoolForEach = (list, action) => {
  for (let i = 0; i < list.length; i++) {
    action(element, i, list);
  }
};

const showTheElement = (element) => console.log(element);

forEachElement([1, 2, 3], showTheElement); // showTheElement is the callback of forEachElement

forEachElement([1, 2, 3], (element) => console.log(element)); // showTheElement is the callback of forEachElement

forEachElement([1, 2, 3], function (element) {
  console.log(element);
});

// // forEach method

// const someArray = [1, 2, 3];

// someArray.forEach();

// Complex conditions

const checkIfParentsAreHappyWithMyGrade = (grade) => {
  if (grade > 90) {
    console.log("Parents are happy");
  } else {
    console.log("Parents are disappoint");
  }
};

const checkComplexParentPerGrade = (grade, subject) => {
  if (grade > 90 && subject !== "french") {
    return "happy";
  } else if (grade > 95 && subject === "french") {
    return "happy";
  } else {
    return "sad";
  }
};

const randomParents = () => {
  if (Math.random() > 0.5) {
    return "happy";
  } else {
    return "sad";
  }
};

const getParentOpinionOnGrade = (grade, subject, parentBehavior) => {
  const parentState = parentBehavior(grade, subject);

  if (parentState === "happy") {
    console.log("Parents are happy");
  } else {
    console.log("Parents are disappoint");
  }
};

getParentOpinionOnGrade(90, "french", checkComplexParentPerGrade);
getParentOpinionOnGrade(90, "french", randomParents);

const showMessage = () => {
  console.log("I AM MESSAGE");
};

showMessage("bob", 51, true);

const needyFunction = (a, b, c, d, e) => {
  if (a > b) {
    console.log(c, d, e);
  }
};

needyFunction();
