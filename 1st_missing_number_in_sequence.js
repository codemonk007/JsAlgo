let t = [1,3,4,5,6,7];
function getMissing(array){
  let temp = Math.floor((array[array.length-1]*(array[array.length-1]+1))/2);
  let sum =0;
  for (let i = 0; i < array.length; i++) {
   sum =sum+array[i]
    
  }
return temp-sum;
  
}



console.log(getMissing(t));
