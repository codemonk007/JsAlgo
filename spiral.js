function spiralTraverse(array) {
    // Write your code here.

    let startrow =0;
    let startColumn = 0;
    let endrow = array.length-1;
    let endColumn = array[0].length-1
    let finalArray = [];
    while (startrow <= endrow && startColumn <= endColumn) {
        for (let index = startrow; index < endrow; index++){
            finalArray.push(array[index])
        }
        for (let index = startColumn+1; index < endColumn; index++){
            finalArray.push(array[index])
        }
        for (let index = endrow; index > startrow; index--){
            finalArray.push(array[index])
        }
        for (let index = endColumn+1; index >startColumn; index--){
            finalArray.push(array[index])
        }
        startColumn++;
        startrow++;
        endColumn--;
        endrow--;
    }
    return finalArray;
  }
  
console.log(spiralTraverse([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]));
