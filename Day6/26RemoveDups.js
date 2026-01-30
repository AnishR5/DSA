var removeDuplicates = function(nums) {
    let uniqueEle = new Set();
    let uniArr = [];
    let dupArr = [];

    for(let i = 0; i<nums.length ;i++){
        let num = nums[i];
        if(uniqueEle.has(num)){
            dupArr.push(num);
        }else{
            uniqueEle.add(num);
            uniArr.push(num)
        }
    }
    console.log("uniArr",uniArr);
    console.log("dupArr",dupArr);
let final = [...uniArr,...dupArr];
console.log(final);

    return final;

};


//two pointer
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

removeDuplicates([1,1,2])