function isMonotonic(array) {
    let  tcheck = array[0]>array[1] ? 'min':'max';
    for (let i = 0; i < array.length-2; i++) {
        if(tcheck == 'min'){
            if(array[i+1]>array[i]){
                return false;
            }

        }
        else if(tcheck == 'max'){
            if(array[i+1]<array[i]){
                return false;
            }

        }
        
    }
    return true;
  }


console.log(isMonotonic([-1, -5, -10, -1, -1100, -1101, -1102, -9001]));
