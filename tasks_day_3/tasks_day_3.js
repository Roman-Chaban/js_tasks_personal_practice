// Tasks Day 3

/*
    Task 1: I need to find odd numbers in an array and sum them all

    1) Create a variable to collect sum of odd numbers
    2) Create cycle and condition
    3 Add a check to isArray to an empty array and whether it's an array overall
    4) if rest of divide === 1, I need to see them in cycle through numbers[i]
    5) Add all odd numbers and return sumOdd

*/

const findOddNumbersInArrayToSumThem = (numbers) => {
  let sumOddNumbers = 0;

  if (numbers.length === 0 || !Array.isArray(numbers)) return null;

  for (let start = 0; start < numbers.length; start++) {
    if (numbers[start] % 2 === 1) {
      sumOddNumbers += numbers[start];
    }
  }
  return sumOddNumbers;
};

// console.log(findOddNumbersInArrayToSumThem([1, 2, 3, 4, 5, 6, 7]));

/*
    Task 2: I need to find all indexes in numbers in array

      1) If there is no number in array, I should return an empty array
      2) The function takes two parameters | array and target
      3) I do the cycle where I compare target to current array element
      4) If the element there is in array I add this number to a new array
      5) Return results of targets

*/

const findAllIndexesInNumbers = (numbers, target) => {
  const equalTargets = [];

  for (let i = 0; i < numbers.length; i++) {
    if (target === numbers[i]) equalTargets.push(i);
  }
  return equalTargets;
};

// console.log(findAllIndexesInNumbers([10, 20, 30, 20, 40], 20));

/*
    Task 3: I need to reverse a string without methods

    1) Create a new reversedString variable, where I will keep reversed string
    2) Do cycle from the last element of string
    3) Sum reversed letters to new reversedString
    4) Return reversedString

*/

const doReverseString = (string) => {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};

// console.log(doReverseString("javascript"));

/*
    Task 3: I need to count vowels and consonants in string

    1) Make string to lowerCase
    2) Create vowels in array
    3) Create two counters fro vowels and consonants
    4) Create countedResult
    5) Do cycle, in cycle create char constant for checks
    6) Create conditional for vowels and increase vowelsCounter and also add them in object
    7) Create conditional for consonants and increase consonantsCounter and also add them in object
    8) Return countedResult

*/

const countVowelsAndConsonantsInString = (string) => {
  const loweredString = string.toLowerCase().replace(/\s/g, "");
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCounter = 0;
  let consonantsCounter = 0;

  const countedResult = {
    vowels: 0,
    consonants: 0,
  };

  for (let i = 0; i < loweredString.length; i++) {
    const char = loweredString[i];
    if (vowels.includes(loweredString[i])) {
      vowelsCounter++;
      countedResult.vowels = vowelsCounter;
    } else if (
      "a" <= char &&
      char <= "z" &&
      !vowels.includes(loweredString[i])
    ) {
      consonantsCounter++;
      countedResult.consonants = consonantsCounter;
    }
  }

  return countedResult;
};

// console.log(countVowelsAndConsonantsInString("Hello World"));
