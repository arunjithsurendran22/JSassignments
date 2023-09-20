// Write a function to calculate the sum of all numbers in a array

function sum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const myArray=[1,2,3,4,5,6,7,8,9,10]
const output=sum(myArray)
console.log(output);