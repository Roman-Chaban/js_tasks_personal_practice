// Tasks Day 6

const countUniqueNumbersInArray = (numbers) => {
  const uniqueNumbersResult = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbersResult.includes(numbers[i])) {
      uniqueNumbersResult.push(numbers[i]);
    }
  }
  return uniqueNumbersResult.length;
};

// console.log(countUniqueNumbersInArray([1, 2, 2, 3, 4, 4, 5]));

const foundTheSecondBigFigure = (numbers) => {
  let max = numbers[0];
  let secondMax = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      secondMax = max;
      max = numbers[i];
    } else if (numbers[i] < max && numbers[i] > secondMax) {
      secondMax = numbers[i];
    }
  }

  return secondMax;
};

// console.log(foundTheSecondBigFigure([-10, -5, -2]));

const findPalindromeFunction = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// console.log(findPalindromeFunction("hello"));

const findTheMostOftenNumberInArray = (numbers) => {
  const numbersObject = {};

  let maxCount = 0;
  let mostFrequent = 0;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (numbersObject[num]) {
      numbersObject[num]++;
    } else {
      numbersObject[num] = 1;
    }
  }

  for (let number in numbersObject) {
    if (numbersObject[number] > maxCount) {
      maxCount = numbersObject[number];
      mostFrequent = number;
    }
  }
  return Number(mostFrequent);
};

// console.log(
//   findTheMostOftenNumberInArray([1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4]),
// );

const capitalizeTheFirstCharacter = (string) => {
  string = string.split(" ");
  let capitalizedString = [];

  for (let word of string) {
    capitalizedString.push(word[0].toUpperCase() + word.slice(1));
  }
  return capitalizedString.join(" ");
};

// console.log(capitalizeTheFirstCharacter("hello world"));
