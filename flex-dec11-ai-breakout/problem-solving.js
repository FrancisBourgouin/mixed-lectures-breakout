// Output every number higher than 5 in my list

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const someFunction = (list) => {
  // for (const number of list) {
  //   if (number > 5) {
  //    console.log(number);
  //   }
  // }

  list.forEach((number) => {
    if (number > 5) {
      return console.log(number);
    }
  });
};

// someFunction(listOfNumbers);

// Input: Array of values, modifier function that will affect every element
// Output: Array of modified values

/**
 * Transform every element of an array and stores it in an output array
 *
 * @param {array} list List of values, we don't expect nested structures
 * @param {function} modifier Function to be applied on every element, the value returned will be stored
 *
 * @return {array} The resulting array
 */

const transformEveryElementOf = (list, modifier) => {
  // Create an empty array to store the transformed elements
  const outputArray = [];

  // Loop through each element in the list
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    // Apply the modifier function to the current element
    const transformedElement = modifier(element, i);

    // Push the transformed element into the output array
    outputArray.push(transformedElement);
  }

  // Return the array containing the transformed elements
  return outputArray;
};

/**
 * Checks if a number is a multiple of 3, 5, and 15
 *
 * @param {number} num The number to be checked
 *
 * @return {boolean} True if the number is a multiple of 3, 5, and 15, false otherwise
 */
const isMultipleOf3_5_15 = (num) => {
  // Check if the number is divisible by 15 (most efficient)
  return num % 15 === 0;

  // Alternative approach (less efficient):
  // return num % 3 === 0 && num % 5 === 0 && num % 15 === 0;
}

const result = transformEveryElementOf([1, 2, 3, 4], (value) => value * 2);

console.log(result);


isM