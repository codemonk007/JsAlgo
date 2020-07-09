let tempString="I am sleepy"
let replacableString="sitting"

function replace(realString,replaceString){

    let tempArray=tempString.split(' ');
    let re= new RegExp(`${realString}`,'gi')
    for (let i = 0; i < tempArray.length; i++) {
        if(re.test(tempArray[i])){
            let temp=tempArray[i].replace(tempArray[i],replaceString);
            tempArray[i]= temp;
            
        }
        
    }
console.log(tempArray.join(' '));


}
//we can also use p.replace(regex, 'ferret')) directly
replace('sleepy','sitting');
