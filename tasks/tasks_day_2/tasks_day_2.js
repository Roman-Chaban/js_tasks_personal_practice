// Tasks Day 2

const findAndCountPairsInArrayOfNumbers = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
};

// console.log(findAndCountPairsInArrayOfNumbers([1, 2, 3, 4, 5, 6]));

const findTargetIndexOfNumber = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }
  return -1;
};

// console.log(findTargetIndexOfNumber([10, 20, 30, 40], 20));

const makeArrayOfNumbersReverse = (numbers) => {
  const reversedNumbers = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
  }

  return reversedNumbers;
};

// console.log(makeArrayOfNumbersReverse([1, 2, 3, 4]));

const searchVowelsInString = (string) => {
  const stringToLower = string.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < stringToLower.length; i++) {
    if (vowels.includes(stringToLower[i])) {
      count++;
    }
  }
  return count;
};

// console.log(searchVowelsInString("hello"));
