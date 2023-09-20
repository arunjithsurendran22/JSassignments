// Write a function to sort a array in ascending order


function sort(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array
}
const myArray=[1,3,5,22,8,13,77,44]
const output=sort(myArray)
console.log(output);