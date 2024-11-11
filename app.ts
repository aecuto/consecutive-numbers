const getPrimeArray = (num: number) => {
  const numArray = new Set();
  let divisor = 2;

  while (num > 1) {
    if (num % divisor === 0) {
      numArray.add(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }

  return numArray;
};

export const findConsecutiveNumber = (
  limit: number,
  distinctPrimeLimit: number
) => {
  let consecutiveNumbers: number[] = [];
  let currentNumber = 2;

  do {
    const fators = getPrimeArray(currentNumber);

    if (fators.size === distinctPrimeLimit) {
      consecutiveNumbers.push(currentNumber);
    } else {
      consecutiveNumbers = [];
    }

    currentNumber++;
  } while (consecutiveNumbers.length != limit);

  return consecutiveNumbers;
};

// console.log(findConsecutiveNumber(4, 4));
