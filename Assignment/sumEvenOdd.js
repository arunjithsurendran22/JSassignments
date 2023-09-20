// Write a program to find the sum of all the even or odd numbers below a given number.

function sumEvenOdd(limit){
    let even=0;
    let odd=0;
    for(let i=1;i<limit;i++){
        if(i%2==0){
            even+=i;
        }else{
            odd+=i;
        }
    }
    return{even,odd}
}


const limit=10;
const output=sumEvenOdd(limit)
console.log(output);