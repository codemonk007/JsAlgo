let Array1=[1,2,3,5,4,6,7,9];
let n=10;
let i=0;
finalArray=[];

while(i<Array1.length){
    let j=i+1;
    while(j<Array1.length){

        if(Array1[i]+Array1[j]===n){
            finalArray.push([Array1[i],Array1[j]]);
        }
        j++
    }
    i++;
}

console.log(finalArray);
