
function threeNumberSum(array, targetSum) {
    // Write your code here.
    let A=[]
    let array1=array.sort((a,b)=> a-b);
    for (let i = 0; i < array1.length-1; i++) {
        let j=i+1;
        let k=array.length-1;
       while(j<=k){
        let sum= array[i]+array[j]+array[k];
        if(sum < targetSum){
            j++;
        }
        else if(sum > targetSum){
            k--;
        }
        else if(sum == targetSum){
            A.push([array[i],array[j],array[k]])
            j++;
            k--;
        }

       }

    }
    return A;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
