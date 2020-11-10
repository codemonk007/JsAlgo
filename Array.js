function twoNumberSum(array, targetSum) {
    // Write your code here.
          let tracker=[];
      let Ar=[];
  for(let i =0 ;i <array.length; i++){
  
      let t= targetSum-array[i]
      if(array.indexOf(t)>-1){
          if(tracker.indexOf(array[i])==-1 && array[i] !== array[array.indexOf(t)]){
              Ar.push(array[i],array[array.indexOf(t)])
              tracker.push(array[i],array[array.indexOf(t)]);
          }
      }
  }
      return Ar;
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  