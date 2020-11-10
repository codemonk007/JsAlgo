
function productSum(array,multiplier =1) {
    let sum =0;
    for (const key in array) {
       if(Array.isArray(array[key])){
           sum = sum + productSum(array[key],multiplier+1)
       }
       sum = sum+array[key];
        
    }
    return sum*multiplier;
  }
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))
   