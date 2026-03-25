const findAndCountPairsInArrayOfNumbers = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
};

const findTargetIndexOfNumber = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) return i;
  }

  return -1;
};

const makeArrayOfNumbersReverse = (numbers) => {
  const reversedNumbers = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
  }
  return reversedNumbers;
};

const searchVowelsInString = (string) => {
  const toLowerVowels = string.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < toLowerVowels.length; i++) {
    if (vowels.includes(toLowerVowels[i])) {
      count++;
    }
  }

  return count;
};
