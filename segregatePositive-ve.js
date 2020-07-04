let Array1=[1,-1,2,-3,5,-4,5,6,7];

let i=0;
let j=Array1.length-1;
let pivot=Math.floor((i+j)/2);

while(i<j){

    if(Array1[i]>0 && Array1[j]<0){
        
        let temp=Array1[j];
        Array1[j]=Array1[i];
        Array1[i]=temp;
        i++;
        j--;
    }
    else if(Array1[i]<0 && Array1[j]>0){
        i++;
        j--;
        continue;
    }
    else if(Array1[i]>0 && Array1[j]>0){

        j--;
        continue;
    }
    else if(Array1[i]<0 && Array1[j]<0){

        i++;
        continue;
    }





}

console.log(Array1);