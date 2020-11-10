function moveElementToEnd(array, toMove) {
    let test = array.filter(Element=>Element% toMove != 0)
    let test2 = array.filter(Element=> Element%toMove ==0);
    let finalArray =test.concat(test2);
    return finalArray;
  }
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2],2));
