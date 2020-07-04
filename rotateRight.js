let Array1=[1,2,3,4,5,6,7,8]
let iterator=4;


let i=iterator-1;
let j=Array1.length-1;

while(i>=0){

    let temp=Array1[j];
    Array1[j]=Array1[i];
    Array1[i]=temp;

    i--;
    j--;


}

console.log(Array1);