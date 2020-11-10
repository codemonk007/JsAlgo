function smallestDifference(array1, array2) {
    // Write your code here.
    let arrayOne=array1.sort((a,b)=>a-b)
    let arrayTwo=array2.sort((a,b)=>a-b)
    let min =Math.abs(arrayOne[0]-arrayTwo[0])
    let value=[arrayOne[0],arrayTwo[0]];
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {

            if(Math.abs(arrayTwo[j]-arrayOne[i]) < min){
                value =[arrayOne[i],arrayTwo[j]]
            }
        }    
    }
    return value;
  }

  console.log(smallestDifference([-1, 5, 10, 20, 28, 3],[26, 134, 135, 15, 17]));
  