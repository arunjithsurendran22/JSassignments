// Write a program to find the maximum and minimum   elements in an array of integers.


function maxMin(arr){
        let max=arr[0];
        for(let i=1;i<arr.length;i++){
            if(max<arr[i]){
                max=arr[i]
            }
        }

        let min=max;
        for(let j=0;j<arr.length;j++){
            if(min>arr[j]){
                min=arr[j]
            }
        }
        console.log(max);
        console.log(min);
}


const myArray=[1,2,3,4,5,6,7,8,9,10]
const output=maxMin(myArray)
console.log(output);