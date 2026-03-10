const checkArraySorted = (nums) =>{

    let isSorted = true; 
    let i=0
    let j=1;

    while(j<nums.length){
        if(nums[i] > nums[j]){
            return false;
        }else{
            i++;
            j++
        }
    }

    return isSorted;
}

const checkArraySorted2 = (nums) =>{
    for (let i=0;i<nums.length;i++){
        let ele = nums[i];
        for(let j = i+1 ; j<nums.length;j++){
            if(nums[j] < ele){
                return false
            }
        }
    }

    return true;
}

console.log(checkArraySorted([5,4,6,7,8]));
console.log(checkArraySorted([1,2,3,4,5]));

console.log(checkArraySorted2([5,4,6,7,8]));
console.log(checkArraySorted2([1,2,3,4,5]));