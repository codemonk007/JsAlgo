let array = [1,2,3,4,5,6,7]
function BinarySearch(array,start,end,n){
    let mid = Math.floor((start+end)/2);
    console.log("mid-->",mid);  
    console.log("array[mid]-->",array[mid]);
    console.log("n--->",n);    
    if(array[mid] == n){
        console.log(mid);        
        return mid;
    }
    if(array[mid]>n){
        return BinarySearch(array,start,mid-1,n);
    }
    else if(array[mid]<n){
        console.log(array[mid])        
        return BinarySearch(array,mid+1,end,n);
    }
}
console.log(BinarySearch(array,0,array.length-1,6));
