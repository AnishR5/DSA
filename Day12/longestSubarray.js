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

longestSubArray1([9, -3, 3, -1, 6, -5],0)
 
longestSubArray1([-3,2,1],6)
 