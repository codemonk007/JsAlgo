// function merge(nL,nR){
//     let A=[];
//     let leftLength=0;
//     let rightLength=0;
//     while(leftLength<nL.length && rightLength < nR.length){

//         if(nL[leftLength]<nR[rightLength]){

//             A.push(nL[leftLength]);
//             leftLength++;
//         }
//         else{
//             A.push(nR[rightLength]);
//             rightLength++;
//         }

//     }

//     return A.concat(nL.slice(leftLength)).concat(nR.slice(rightLength));



// }

// function mergeSort(A){

//     if(A.length<=1)
//     {
//         return A;
//     }
//     let middle=Math.floor(A.length/2);
//     let left=A.slice(0,middle);
//     let right=A.slice(middle);
//     return merge(mergeSort(left),mergeSort(right));

// }

// console.log(mergeSort([2,3,4,1,4,7,5]))
// let a=[21,2,23,12,10];

function mergeSort(Array1){

    if(Array1.length <=1){
        return Array1
    }
    let middle=Math.floor(Array1.length/2);
    let left=Array1.slice(0,middle);
    let right=Array1.slice(middle);

    return merge(mergeSort(left),mergeSort(right));

}

function merge(left,right){

let lLength=0;
let rRight=0;
let A=[];
while(lLength<left.length && rRight<right.length){
if(left[lLength]<right[rRight]){
    A.push(left[lLength]);
    lLength++;
}
else{
    A.push(right[rRight]);
    rRight++;
}
}
return A.concat(left.slice(lLength)).concat(right.slice(rRight));
}


console.log(mergeSort([2,3,4,1,4,7,5]));