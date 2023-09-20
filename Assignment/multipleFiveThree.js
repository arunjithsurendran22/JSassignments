// Write a program to find the sum of all the multiples of 3 or 5 below a given number.

function sumFiveThree(limit){
    let three=0;
    let five=0;
    for(let i=1;i<=limit;i++){
       if(i%3==0){
            three+=i;
       }else if(i%5==0){
            five+=i;
       }
    }
    return {three,five}
}
const limit=10;
const output=sumFiveThree(limit)
console.log(output);