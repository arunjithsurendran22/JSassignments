// Write a function to calculate the factorial of a given number 


function factorial(f){
    let fact=1;
    for(i=1;i<f;i++){
        fact+=fact*i;
    }
    return fact

}

const n=5
const output=factorial(n)
console.log(output);