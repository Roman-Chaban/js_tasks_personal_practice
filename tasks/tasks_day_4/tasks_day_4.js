// Tasks Day 4

/* 

  Task 1: I need to find the threshold number in an array

  1) First of all I have to create tresholdCounter
  2) Second I will make a condition to an empty array and if there is an array
  3) Then I do cycle and on every step I will check, if a current number is big than treshold, I'll increase counter
  4) Finally I will return total of treshold numbers

*/

const findAndCountTreshold = (numbers, treshold) => {
  let tresholdCounter = 0;

  if (numbers.length === 0 || !Array.isArray(numbers)) return null;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > treshold) tresholdCounter++;
  }
  return tresholdCounter;
};

/* 

  Task 2: Task says that I need to delete all duplicates in an array

  1) Function gets an array of numbers
  2) I need to return a new array without duplicates
  3) I need to create an empty array for result
  4) I will do cycle when I will check on every step that a number is on an array
  5) If there is no number in an array, I will ad it to a new array
  6) Finally I have to return the results of numbers without duplicates


*/

const deleteDuplicateInArray = (numbers) => {
  const withoutDuplicates = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!withoutDuplicates.includes(numbers[i])) {
      withoutDuplicates.push(numbers[i]);
    }
  }

  return withoutDuplicates;
};

// console.log(deleteDuplicateInArray([5,5,5,5,5,5]));

/* 

  Task 3: In this task I need to count lower and upper characters in string

  1) Create variable of results
  2) Create lowercaseCounter and uppercaseCounter to increase them
  3) Do cycle on every character in string
  4) Create a character variable it means currentChar
  5) Check if there currentChar in lowercase then I need to increase lowercaseCounter and add it into filed in object, the same for uppercase
  6) Return object with two fields with results of lower and upper characters


*/

const countSmallAndBigCharactersInString = (string) => {
  const results = {
    lowercase: 0,
    uppercase: 0,
  };

  let lowercaseCounter = 0;
  let uppercaseCounter = 0;

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const checkLower = "a" <= currentChar && currentChar <= "z";
    const checkUpper = "A" <= currentChar && currentChar <= "Z";
    if (checkLower) {
      lowercaseCounter++;
    } else if (checkUpper) {
      uppercaseCounter++;
    }
  }
  results.lowercase = lowercaseCounter;
  results.uppercase = uppercaseCounter;

  return results;
};

console.log(countSmallAndBigCharactersInString("hello WORLD"));
