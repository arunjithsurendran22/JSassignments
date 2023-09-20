// Write a function to remove duplicates from a array


function removeDuplicate(array){
    let flag=0;
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]==array[j]){
                flag=1;
            }
            if(flag==1){
                for(let k=i;k<array.length;k++){
                    array[k]=array[k+1];
                }
                
            }
        }
    }
    console.log(array);

}


const myArray=[1,1,2,2,3,3,5,6,7,7,8,9,11,14,13,11,15]
const output=removeDuplicate(myArray);
console.log(output);