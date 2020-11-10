function permutation(array){
    const permuatations = [];
     getPermuattion(array,[],permuatations);
    return permuatations; 
  }
  function getPermuattion(array,currentPermutation,permuatations) {
      if(!array.length && currentPermutation.length){
        permuatations.push(currentPermutation)
      }
     else{
      for (let i = 0; i < array.length; i++) {
        const newArray = array.slice(0,i).concat(array.slice(i+1));
         const newcurrentPermutation = currentPermutation.concat([array[i]])
        getPermuattion(newArray,newcurrentPermutation,permuatations)
      }
     }
  }
  console.log(permutation([1,2,3]));
  