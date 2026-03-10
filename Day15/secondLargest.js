const secondLargest = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  return {
    secondSmallest: sortedArr[1],
    secondLargest: sortedArr[arr.length - 2],
  };
};

const secondLargest2 = (arr) => {
  let largest = arr[0];
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    largest = Math.max(largest, arr[i]);
    smallest = Math.min(smallest, arr[i]);
  }

  let secondLarge = -Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < secondSmall && arr[i] != smallest) {
      secondSmall = arr[i];
    }

    if (arr[i] > secondLarge && arr[i] != largest) {
      secondLarge = arr[i];
    }
  }
  return {
    secondSmall,
    secondLarge,
  };
};

const secondLargest3 = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let smallest = Infinity;
  let secondSmallest = Infinity;

  //1, 2, 4, 7, 7, 5
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !==smallest) {
      secondSmallest = arr[i];
    }

    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return {
    secondLargest,
    secondSmallest
  }
};

console.log(secondLargest([1, 2, 4, 7, 7, 5]));
console.log(secondLargest2([1, 2, 4, 7, 7, 5]));
console.log(secondLargest3([1, 2, 4, 7, 7, 5]));

