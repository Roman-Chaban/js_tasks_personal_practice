const findAndCountTreshold = (numbers, treshold) => {
  let tresholdCounter = 0;

  if (numbers.length === 0 || !Array.isArray(numbers)) return null;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > treshold) {
      tresholdCounter++;
    }
  }

  return tresholdCounter;
};

const deleteDuplicateInArray = (numbers) => {
  let withoutDuplicates = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!withoutDuplicates.includes(numbers[i])) {
      withoutDuplicates.push(numbers[i]);
    }
  }
  return withoutDuplicates;
};

const countSmallAndBigCharactersInString = (string) => {
  const results = {
    lowercase: 0,
    uppercase: 0,
  };

  for (let char of string) {
    const isSmaller = "a" <= char && char <= "z";
    const isBigger = "A" <= char && char <= "Z";

    results.lowercase += isSmaller ? 1 : 0;
    results.uppercase += isBigger ? 1 : 0;
  }

  return results;
};
