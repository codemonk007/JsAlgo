let test =[1,2,3,4,8,7,6];

function linierSearch(item,test){
    for (let i = 0; i < test.length; i++) {
        if(item == test[i]){
            return true;
        } 
    }
    return false;
} 

console.log(linierSearch(2,test));
