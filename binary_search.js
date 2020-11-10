let temp = [1,2,3,4,5,6,7]

function tempBinarySearch(x,low,high){

    let middle = (low + high)/2;
    if(x == temp[middle]){
        console.log(middle)
        return middle;
    }
    else if(x > middle){
        tempBinarySearch(x,middle+1 ,high);
    }
    else{
        tempBinarySearch(x,low,middle-1);
    }
}
let t = tempBinarySearch(7,0,temp.length-1)

console.log(t);
