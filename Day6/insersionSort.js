function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > val) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = val;
  }
  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(numbers)); 
