// Write a function to find the maximum element in a array

function findMax(array){

    let max=array[0];
    for(let i=1;i<array.length;i++){
        if(max<array[i]){
            max=array[i];
        }

    }
    return max;
}
let numbers=[1,2,3,4,5,6,7,8,9,10,11];
let myArray=findMax(numbers);
console.log(`The maximum number is: ${myArray}`);

// Write a function to reverse a string 

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  console.log(reversedString);

//   Write a function to sort a array in ascending order

function arraySort(str2){
    let arraySorting=str2.sort();
    console.log(arraySorting);
}

const myArray2=[1,3,4,1,2,7,9,5,11,77,44,12]    
const sortOutput=arraySort(myArray2)

// Write a function to check if a given number is prime.

function prime(k){
    let prime=0;
    for(let i=2;i<k;i++){
        if(k%i==0){
            prime=1;
        }
    }
    if(prime==0){
        console.log("prime number");
    }else{
        console.log("not prime number");
    }
}

prime(18)   

// Write a function to find the second largest number in a array

function secondLargest(arr){
    let large=arr[0];
    for(let i=1;i<arr.length;i++){
        if(large<arr[i]){

            second=large;
            large=arr[i];
        }else if(second<arr[i]){
            second=arr[i];
        }
    }
    console.log(second);

}

let number=[1,2,3,4,5,6,7,8,9]
 let result =secondLargest(number)

//  Write a function to remove duplicates from a array

function removeDuplicate(arrDupe){
    len=arrDupe.length;
    let flag=0;
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            flag=1;
        }
        if(flag==1){
            for(let k=i;k<len;k++){
                arrDupe[k]=arrDupe[k+1];
            }
            len--;
            i--;
        }
    }
    console.log(arrDupe);
}


let duplicate=[1,1,2,2,3,4,5,5,6,6,7,8]

let resultDuplicate=removeDuplicate(duplicate)