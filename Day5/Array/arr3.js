// check if array is sorted

const checkIfSorted = (arr) => {
  let issorted = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if( arr[i] > arr[i+1]){
        issorted = false;
        console.log("Array ", arr, ' Not sorted');
        return;
    }
  }

    console.log("Array ", arr, ' is sorted');
  
};

checkIfSorted([8,10,5,7,9])

checkIfSorted([2,4,8,45,69])