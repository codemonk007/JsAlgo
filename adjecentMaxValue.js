function maxSubsetSumNoAdjacent(array) {
    // Write your code here.


    console.log("Hi");
    let temp = 0;
    let temp1 = 0;

    for (let i = 0; i < array.length; i++) {
        temp = temp+array[i];
        i = i+1
    }
    for (let j = 1; j < array.length; j++) {
        temp1= temp1+array[j];
        j = j+1;
    }
    return temp > temp1 ? temp:temp1
  }

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
