let n = 90 ;
let mainarray = [12,90,15,17,20,9];
function linear(array){
    console.log(array[array.length-1] );    
    if(array.length == 0) return -1;
    if(array[array.length-1] == n) return array.indexOf(array[array.length-1]);
    array = array.splice(0,array.length-1)
    console.log(array);
    return linear(array);
}

console.log("answer--->",linear(mainarray));