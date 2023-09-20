// Write a program to find the sum of all prime numbers up to a given limit. 



// function primeSum(limit){
//     let prime=0;
//     let sum=0;
//     for(let i=2;i<=limit;i++){
//         if(i%i==0){
//             prime=1;
//         }
//         if(prime==0){
//             sum+=i;
//         }
//     }
//     return sum
// }


// const limit=10;
// const output=primeSum(limit);
// console.log(output);

function isPrime(number) {
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

function sumOfPrimesUpTo(limit) {
    let sum = 0;

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

// Example usage:
const limit = 10; // Replace with your desired limit
const result = sumOfPrimesUpTo(limit);
console.log(result);
