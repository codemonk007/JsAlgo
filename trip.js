function smallestDifference(array1, array2) {
    // Write your code here.
    let i=0;
    let j=0
    let min=999;
    let pair=[];
    while(i<= array1.length-1 && j<= array2.length-1){
        if(array1[i] > array2[j]){
            if(Math.abs((array1[i]-array2[j]))<min){
                min=array1[i]-array2[j];
                pair.splice(0,pair.length);
                pair.push(array1[i],array2[j]); 
            }
            j++
        }
        else if(array1[i] < array2[j]){
            if(Math.abs((array2[j]-array1[i]))<min){
                min=array2[j] - array1[i];
                pair.splice(0,pair.length);
                pair.push(array1[i],array2[j]); 
            }
            i++
        }
        else{
            i++;
            j++;
        }
    }
return pair
  }
console.log(smallestDifference([-1, 5, 10, 20, 28, 3],[26, 134, 135, 15, 17]));
