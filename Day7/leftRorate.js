const leftRotate = (arr) => {
  console.log("Original Arr", arr);
  let firstEle = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = firstEle;

  console.log("Shifted Arr", arr);
};


leftRotate([1,2,3,4,5])