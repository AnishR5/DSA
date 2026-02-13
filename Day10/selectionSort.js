const selectionSort = (arr) => {
  console.log("Original Array : ", arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  console.log("Sorted array :", arr);
};

selectionSort([13, 46, 24, 52, 20, 9]);
selectionSort([5, 4, 3, 2, 1]);
