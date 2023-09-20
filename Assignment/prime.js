// Write a function to check if a given number is prime.

function prime(p){
  let prime=1;
    for(let i=2;i<p;i++){
        if(p%i==0){
            prime=0;
        }
    }
     if(prime==1){
        console.log("prime number");
    }else{
        console.log("not prime numer");
    }
}


const n=16;
const output=prime(n)
console.log(output);