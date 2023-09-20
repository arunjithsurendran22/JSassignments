// Write a function to calculate the sum of all even numbers between 1 and n.


function evenSum(n){
    let sum=0;
    for(let i=2;i<n;i++){
        if(i%2==0){
            sum+=i;
        }
    }
    return sum;
}
const n=10;
const output=evenSum(n);
console.log(output);
