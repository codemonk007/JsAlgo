function isValidSubsequence(array, sequence) {
let seqInt=0;
for (let i = 0; i < array.length; i++) {
    if(sequence.indexOf(array[i])>-1){
        seqInt +=1;
    }
}
 return seqInt === sequence.length ? true:false;
}

console.log(isValidSubsequence([5,1,22,25,6,-1,8,10],[1,6,-1,10]))
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 22, 25, 6, -1, 8, 10]))
