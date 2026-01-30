var check = function(nums) {

    let sorted = true;
    let rotationIndex = null;
  for (let i = 0; i < nums.length - 1; i++) {
    if( nums[i] > nums[i+1]){
        sorted = false;
        rotationIndex = i+1;
        break;
    }
  }
  console.log("rotationIndex", rotationIndex);
  console.log("sorted", sorted);


  if(sorted) return true; 
    let newSortedArr = [];
  for (let i = rotationIndex ; i<nums.length ; i++){
    newSortedArr.push(nums[i]);
  }

  for(let i=0; i<rotationIndex ; i++){
    newSortedArr.push(nums[i]);
  }
  console.log("newSortedArr", newSortedArr);

  for (let i = 0; i < newSortedArr.length - 1; i++) {
    if( newSortedArr[i] > newSortedArr[i+1]){
        return false;
    }
  }

  return true;
};

//check([1,2,3]);
//console.log("Array sorted : ", check([3,4,5,1,2]));
console.log("Array sorted : ", check([2,1,3,4]));
