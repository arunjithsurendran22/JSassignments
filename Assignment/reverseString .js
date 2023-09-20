// Write a function to reverse a string 

function reverse(str){
    let string="";
    for(let i=str.length-1;i>=0;i--){
        string+=str[i];
    }
    return string;
}





const myString="hello"
const output=reverse(myString)
console.log(output);