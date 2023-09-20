// Write a function to find the second largest number in a array


function secondLarge(array){
    let second=0;
    let large=array[0]
    for(let i=1;i<array.length;i++){
        if(large<array[i]){
            second=large;
            large=array[i];
        }else if(second<array[i]){
            second=array[i]
        }
    }
    return second;

}


const myArray=[1,2,3,4,5,6,7,8,99,66]

const output=secondLarge(myArray);

console.log(output);