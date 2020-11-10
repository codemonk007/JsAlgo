function binarySearch(array, target) {
    return bSearch(array,0,array.length-1,target);
  }
function bSearch(array,start,end,target){
    let mid = Math.floor((start+end)/2);
    console.log(mid);
    
    if(target == array[mid])return mid;
    if(target > array[mid]) return bSearch(array,mid,end,target);
    if(target < array[mid]) return bSearch(array,0,mid-1,target);
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73],33));



