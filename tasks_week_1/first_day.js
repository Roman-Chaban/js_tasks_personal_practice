const showEveryElementInArray = (numbers) => {
  for (let number = 0; number < numbers.length; number++) {
    console.log(numbers[number]);
  }
};

const findSumOfArray = (numbers) => {
  let sum = 0;

  for (let number = 0; number < numbers.length; number++) {
    sum += numbers[number];
  }

  return sum;
};

const findAnAverageNumberInArray = (numbers) => {
  let sum = 0;

  for (let number = 0; number < numbers.length; number++) {
    sum += numbers[number];
  }

  return sum / numbers.length;
};

const findMinElementInArray = (numbers) => {
  let minimum = numbers[0];

  for (let number = 0; number < numbers.length; number++) {
    if (numbers[number] < minimum) {
      minimum = numbers[number];
    }
  }

  return minimum;
};

const findMaxElementInArray = (numbers) => {
  let max = numbers[0];

  for (let number = 0; number < numbers.length; number++) {
    if (numbers[number] > max) {
      max = numbers[number];
    }
  }

  return max;
};

const findMinAndMaxElementsInArray = (numbers) => {
  let minimum = numbers[0];
  let maximum = numbers[0];

  for (let number of numbers) {
    if (number < minimum) {
      minimum = number;
    } else if (number > maximum) {
      maximum = number;
    }
  }

  return { minimum, maximum };
};

const findEvenInArray = (numbers) => {
  const evenNumbers = [];

  for (let number = 0; number < numbers.length; number++) {
    const evenCondition = numbers[number] % 2 === 0;

    if (evenCondition) {
      evenNumbers.push(numbers[number]);
    }
  }
  return evenNumbers;
};

const findOddInArray = (numbers) => {
  const oddNumbers = [];

  for (let number = 0; number < numbers.length; number++) {
    const oddCondition = numbers[number] % 2 !== 0;

    if (oddCondition) {
      oddNumbers.push(numbers[number]);
    }
  }

  return oddNumbers;
};

const findOddAndEevenNumbersInArray = (numbers) => {
  const numbersObject = {
    even: [],
    odd: [],
  };

  for (let number = 0; number < numbers.length; number++) {
    const evenCondition = numbers[number] % 2 === 0;
    const oddCondition = numbers[number] % 2 !== 0;

    if (evenCondition) {
      numbersObject.even.push(numbers[number]);
    } else if (oddCondition) {
      numbersObject.odd.push(numbers[number]);
    }
  }

  return numbersObject;
};

const findAllNumbersBiggerThanTreshold = (numbers, treshold) => {
  const numbersBiggerThanTreshold = [];

  for (let number = 0; number < numbers.length; number++) {
    if (numbers[number] > treshold) {
      numbersBiggerThanTreshold.push(numbers[number]);
    }
  }

  return numbersBiggerThanTreshold;
};

const createNewArrayWithoutZeros = (numbers) => {
  const numbersWithoutZeros = [];

  for (let number = 0; number < numbers.length; number++) {
    if (numbers[number] !== 0) {
      numbersWithoutZeros.push(numbers[number]);
    }
  }

  return numbersWithoutZeros;
};

const deleteDuplicatesInArray = (numbers) => {
  const arrayWithoutDuplicates = [];

  for (let number = 0; number < numbers.length; number++) {
    if (!arrayWithoutDuplicates.includes(numbers[number])) {
      arrayWithoutDuplicates.push(numbers[number]);
    }
  }

  return arrayWithoutDuplicates;
};

const countUniqueNumbersInArray = (numbers) => {
  let uniqueNumbers = [];

  for (let number = 0; number < numbers.length; number++) {
    if (!uniqueNumbers.includes(numbers[number])) {
      uniqueNumbers.push(numbers[number]);
    }
  }

  return uniqueNumbers.length;
};

const countSumOfRepeatedEveryNumber = (numbers) => {
  const numbersObject = {};

  for (let number of numbers) {
    if (numbersObject[number]) {
      numbersObject[number]++;
    } else {
      numbersObject[number] = 1;
    }
  }

  return numbersObject;
};

const findTheSecondBiggerNumber = (numbers) => {
  let theBiggestFigure = Math.max(...numbers);
  const numbersWithoutBiggest = [];

  for (let number = 0; number < numbers.length; number++) {
    if (numbers[number] < theBiggestFigure) {
      numbersWithoutBiggest.push(numbers[number]);
    }
  }

  if (numbersWithoutBiggest.length === 0) return null;

  return Math.max(...numbersWithoutBiggest);
};

const findTheMostFrequentNumberInAnArray = (numbers) => {
  let numbersObject = {};

  let maxCount = 0;
  let mostFrequent = 0;

  for (let number of numbers) {
    if (numbersObject[number]) {
      numbersObject[number]++;
    } else {
      numbersObject[number] = 1;
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

const countNumberThanBiggerAnAverage = (numbers) => {
  let theMiddleNumber = 0;
  let sumOfNumbers = 0;
  let sumOfBiggerThanAverage = 0;

  for (let number of numbers) {
    sumOfNumbers += number;
  }

  theMiddleNumber = sumOfNumbers / numbers.length;

  for (let number of numbers) {
    if (number > theMiddleNumber) {
      sumOfBiggerThanAverage++;
    }
  }

  return sumOfBiggerThanAverage;
};

const findSumOfMinimumAndMaximum = (numbers) => {
  const minimum = Math.min(...numbers);
  const maximum = Math.max(...numbers);

  return numbers
    .filter((number) => number > minimum && number < maximum)
    .reduce((accumulator, number) => {
      return accumulator + number;
    }, 0);
};

const findAllTargetIndexesInArray = (numbers, target) => {
  const foundTargets = [];

  if (numbers.length === 0) return [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      foundTargets.push(i);
    }
  }

  return foundTargets;
};

const findSubBetweenTwoIndexes = (numbers, start, end) => {
  let sum = 0;

  for (let i = start; i < end; i++) {
    sum += numbers[i];
  }

  return sum;
};

const doReversedString = (string) => {
  let reversedString = "";

  if (typeof string !== "string") return "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
};

const theLongestWordInString = (string) => {
  if (typeof string !== "string") return "";

  const splittedString = string.trim().split(/\s+/);
  let longestWord = splittedString[0];

  for (let i = 1; i < splittedString.length; i++) {
    if (splittedString[i].length > longestWord.length) {
      longestWord = splittedString[i];
    }
  }

  return longestWord;
};

const returnAllWordsLongThanNSymbols = (string, n) => {
  if (typeof string !== "string" || typeof n !== "number") return [];

  const splittedString = string.trim().split(/\s+/);
  const wordsLongerThanN = [];

  for (let i = 0; i < splittedString.length; i++) {
    if (splittedString[i].length > n) {
      wordsLongerThanN.push(splittedString[i]);
    }
  }

  return wordsLongerThanN;
};

const capitalizeTheFirstLetterInString = (string) => {
  const splittedString = string.trim().split(/\s+/);
  const capitalizedString = [];

  for (let i = 0; i < splittedString.length; i++) {
    capitalizedString.push(
      splittedString[i][0].toUpperCase() + splittedString[i].slice(1),
    );
  }

  return capitalizedString.join(" ");
};
