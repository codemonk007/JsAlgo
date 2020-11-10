function threeNumberSum(array, targetSum) {
    // Write your code here.
    let TempA =[];
    let tArray = array.sort((a,b)=>a-b);
  
    for (let i = 0; i < tArray.length-2; i++) {
      let k =i+1;
      let l = tArray.length-1
      while (k<=l) {
          if(tArray[i]+tArray[k]+tArray[l] === targetSum){
            TempA.push([tArray[i],tArray[k],tArray[l]])
            k++;
            l--;
          }
          else if(tArray[i]+tArray[k]+tArray[l] < targetSum){
            k++;
          }
          else if(tArray[i]+tArray[k]+tArray[l] > targetSum){
            l--;
          }
      }
    }
    return TempA;
      
  }
  console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6],0));
  