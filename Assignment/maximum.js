// Write a function to find the maximum element in a array

function largestElement(arr){
    let large=arr[0];
    for(let i=1;i<arr.length;i++){
        
        if(large<arr[i]){
            second=large;
            large=arr[i];
        }else if(second<arr[i]){
            second=arr[i];
        }
    }
    return large
}


const myArray=[1,2,3,4,5,6,7,8,9,10,11]
const output=largestElement(myArray)
console.log(output);
