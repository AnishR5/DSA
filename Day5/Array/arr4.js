// remove duplicates from sorted array
const removeDups = (arr) => {

    let uniqueEle = new Set();

    for(let i = 0; i<arr.length ;i++){
        uniqueEle.add(arr[i]);
    }

    const uniqueArr = [...uniqueEle];

    console.log("non duplicate arr: ", uniqueArr);
};

removeDups([1,1,1,2,2,3,3,3,3,4,4])
