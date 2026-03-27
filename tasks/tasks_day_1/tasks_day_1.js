// Tasks Day 1

const countArrayOfNumbers = (numbers) => {
  if (!Array.isArray(numbers)) return 0;

  return numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);
};

// console.log(countArrayOfNumbers([1, 2, 3, 4, 5])); // 15

const findTheSmallestNumberOfArray = (numbers) => {
  if (numbers.length === 0) return null;

  let minimum = numbers[0];

  for (let number of numbers) {
    if (number < minimum) {
      minimum = number;
    }
  }

  return minimum;
};

const findTheBiggestNumberOfArray = (numbers) => {
  if (numbers.length === 0) return null;

  let maximum = numbers[0];

  for (let number of numbers) {
    if (number > maximum) {
      maximum = number;
    }
  }

  return maximum;
};

// console.log(findTheSmallestNumberOfArray([99, 102, 5, 34, 2, 55]));
// console.log(findTheBiggestNumberOfArray([99, 102, 5, 34, 2, 55]));

const searchPairsInArray = (numbers) => {
  let count = 0;

  for (let number of numbers) {
    if (number % 2 === 0) {
      count++;
    }
  }

  return count;
};

const searchImPairsInArray = (numbers) => {
  let count = 0;

  for (let number of numbers) {
    if (number % 2 !== 0) {
      count++;
    }
  }

  return count;
};

// console.log(searchPairsInArray([1, 2, 3, 4, 5, 6, 8]));
// console.log(searchImPairsInArray([1, 2, 3, 4, 5]));
