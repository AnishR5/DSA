const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    function reverseArray (arr,index = arr.length - 1, newArr =[]){

        newArr.push(arr[index]);

        if(index === 0){
            console.log("Origi",arr);
            console.log("rever", newArr);
            return
        }

        reverseArray(arr, index-1 ,newArr);

    }
rl.question("Enter number  ", function(num) {

    let arr = [1,2,3,4,5];

    reverseArray(arr)

  rl.close();
});
