function quickSort(ItemArray,left,right){
    if(ItemArray.length>0){
    let partitionIndex=partition(ItemArray,left,right);
    if(partitionIndex-1>left){
        quickSort(ItemArray,left,partitionIndex-1);
    }
    if(partitionIndex<right){
    quickSort(ItemArray,partitionIndex,right)
    }
    }
    return ItemArray;
    }
    function partition(ItemArray,left,right){
    
        let pivot=ItemArray[Math.floor((left+right)/2)];
        let i=left;
        let j=right
        while(i<=j){
            while(ItemArray[i]<pivot){
                i++;
            }
            while(ItemArray[j]>pivot){
                j--;
            }
            if(i<=j){
                swap(ItemArray,i,j);
                i++;
                j--;
    
            }
        }
        return i;
    }
    function swap(ItemArray,left,right){
    
        let temp=ItemArray[left];
        ItemArray[left]=ItemArray[right];
        ItemArray[right]=temp;
    }
    var items=[22,13,54,63,7,9];
    var sortedArray = quickSort(items, 0, items.length - 1);
    console.log(sortedArray); //prints [2,3,5,6,7,9]