const longestSubArray1 = (nums, sum) =>{

    let cnt = 0;
    for(let i=0;i<nums.length-1;i++){
        let currentSum = 0;
        let lengthCnt = 0;
        for(let j=i;j<nums.length;j++){

            currentSum+=nums[j];
            lengthCnt++;
            if(currentSum === sum){
                cnt = Math.max(cnt, lengthCnt)
            }
            if(currentSum>sum) break;
        }
    }

    console.log("Longest subarray : ",cnt);
    return;
}

longestSubArray1([10, 5, 2, 7, 1, 9],15)
 
longestSubArray1([-3,2,1],6)
 