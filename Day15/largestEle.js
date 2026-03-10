
const largestEle = (arr) =>{

    let largest = arr[0];

    for(let i=1 ;i<arr.length;i++){
        largest = Math.max(largest,arr[i])
    }

    return largest;
}

console.log(largestEle([8, 10, 5, 7, 9])); 