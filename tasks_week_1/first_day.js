const showEveryElementInArray = (numbers) => {
  for (let number = 0; number < numbers.length; number++) {
    console.log(numbers[number]);
  }
};

// showEveryElementInArray([1, 3, 5, 7]);

const findSumOfArray = (numbers) => {
  let sum = 0;

  for (let number = 0; number < numbers.length; number++) {
    sum += numbers[number];
  }

  return sum;
};

// console.log(findSumOfArray([2, 5, 10]));

const findAnAverageNumberInArray = (numbers) => {
  let sum = 0;

  for (let number = 0; number < numbers.length; number++) {
    sum += numbers[number];
  }

  return sum / numbers.length;
};

// console.log(findAnAverageNumberInArray([4, 8, 12]));

const findMinElementInArray = (numbers) => {
  let minimum = numbers[0];

  for (let number = 0; number < numbers.length; number++) {
    if (numbers[number] < minimum) {
      minimum = numbers[number];
    }
  }

  return minimum;
};

// console.log(findMinElementInArray([7, 2, 9, 1]));

const findMaxElementInArray = (numbers) => {
  let max = numbers[0];

  for (let number = 0; number < numbers.length; number++) {
    if (numbers[number] > max) {
      max = numbers[number];
    }
  }

  return max;
};

// console.log(findMaxElementInArray([7, 2, 9, 1, 25]));

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

// console.log(findMinAndMaxElementsInArray([7, 2, 9, 1, 25]));

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

// console.log(findEvenInArray([1, 2, 3, 4, 5, 6]));

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

// console.log(findOddInArray([1, 2, 3, 4, 5, 6]));

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

// console.log(findOddAndEevenNumbersInArray([1, 2, 3, 4, 5, 6]));

const findAllNumbersBiggerThanTreshold = (numbers, treshold) => {
  const numbersBiggerThanTreshold = [];

  for (let number = 0; number < numbers.length; number++) {
    if (numbers[number] > treshold) {
      numbersBiggerThanTreshold.push(numbers[number]);
    }
  }

  return numbersBiggerThanTreshold;
};

// console.log(findAllNumbersBiggerThanTreshold([3, 8, 1, 10], 5));

const createNewArrayWithoutZeros = (numbers) => {
  const numbersWithoutZeros = [];

  for (let number = 0; number < numbers.length; number++) {
    if (numbers[number] !== 0) {
      numbersWithoutZeros.push(numbers[number]);
    }
  }

  return numbersWithoutZeros;
};

// console.log(createNewArrayWithoutZeros([0, 5, 0, 2, 7, 10]));

const deleteDuplicatesInArray = (numbers) => {
  const arrayWithoutDuplicates = [];

  for (let number = 0; number < numbers.length; number++) {
    if (!arrayWithoutDuplicates.includes(numbers[number])) {
      arrayWithoutDuplicates.push(numbers[number]);
    }
  }

  return arrayWithoutDuplicates;
};

// console.log(deleteDuplicatesInArray([1, 2, 2, 3, 3, 3]));

const countUniqueNumbersInArray = (numbers) => {
  let uniqueNumbers = [];

  for (let number = 0; number < numbers.length; number++) {
    if (!uniqueNumbers.includes(numbers[number])) {
      uniqueNumbers.push(numbers[number]);
    }
  }

  return uniqueNumbers.length;
};

// console.log(countUniqueNumbersInArray([1, 2, 3, 3, 3]));

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

// console.log(countSumOfRepeatedEveryNumber([1, 2, 2, 3, 3, 3]));

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

// console.log(findTheSecondBiggerNumber([6, 8, 10]));

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

// console.log(findTheMostFrequentNumberInAnArray([1, 2, 2, 3, 3, 3]));

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

// console.log(countNumberThanBiggerAnAverage([1, 2, 3, 4, 5]));

const findSumOfMinimumAndMaximum = (numbers) => {
  const minimum = Math.min(...numbers);
  const maximum = Math.max(...numbers);

  return numbers
    .filter((number) => number > minimum && number < maximum)
    .reduce((accumulator, number) => {
      return accumulator + number;
    }, 0);
};

// console.log(findSumOfMinimumAndMaximum([4, 1, 7, 9]));
