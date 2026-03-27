// Tasks Day 5

const findMinAndMaxNumberInArrayAndSumAllOfThem = (numbers) => {
  let minIndex = 0;
  let maxIndex = 0;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
      minIndex = i;
    } else if (numbers[i] > numbers[maxIndex]) {
      maxIndex = i;
    }
  }

  let start = Math.min(minIndex, maxIndex);
  let end = Math.max(minIndex, maxIndex);

  for (let i = start + 1; i < end; i++) {
    sum += numbers[i];
  }

  return sum;
};

// console.log(findMinAndMaxNumberInArrayAndSumAllOfThem([1, 2, 3, 4]));

const filteredStringByLength = (strings, length) => {
  const results = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= length) {
      results.push(strings[i]);
    }
  }
  return results;
};

// console.log(filteredStringByLength(["hello", "world", "love", "momentum"], 6));

const findTheLongestWord = (string) => {
  const splittedWords = string.split(" ");
  let theLongestWord = splittedWords[0];

  for (let word of splittedWords) {
    if (word.length > theLongestWord.length) {
      theLongestWord = word;
    }
  }
  return theLongestWord;
};

// console.log(findTheLongestWord("hello my country"));
