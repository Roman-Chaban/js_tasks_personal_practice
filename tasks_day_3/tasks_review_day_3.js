const findOddNumbersInArrayToSumThem = (numbers) => {
  let sumOfOdd = 0;

  if (numbers.length === 0 || !Array.isArray(numbers)) return null;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      sumOfOdd += numbers[i];
    }
  }

  return sumOfOdd;
};

const findAllIndexesInNumbers = (numbers, target) => {
  const allTargetIndexes = [];

  if (numbers.length === 0 || !Array.isArray(numbers)) return null;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      allTargetIndexes.push(i);
    }
  }

  return allTargetIndexes;
};

const doReverseString = (string) => {
  let reversedResult = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedResult += string[i];
  }
  return reversedResult;
};

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
