let teststring="Hi Hello I am GOODDDD";
let testArray=teststring.split(' ');
let max=0;
for (let i = 0; i < testArray.length; i++) {
    if(testArray[i].length>max){
        max=testArray[i].length
    }
    
}


console.log(max)