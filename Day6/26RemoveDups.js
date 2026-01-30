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

removeDuplicates([1,1,2])