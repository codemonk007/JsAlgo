function recursiveFind(container, item,index) {
 
    // search miss
    if(index >= container.length) return -1;
 
    // base case when we find the item
    if(container[index] == item) return index;
 
    return recursiveFind(container, item, index+1);
}

console.log(recursiveFind([20,12,10,18,90],18,0));
    