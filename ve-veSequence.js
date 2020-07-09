let Array1=[1,2,3,4,5,-1,-2,-3,-1,-4];
let i=1;
let ispositive;
if(Array1[i]>0){
ispositive=true;
}
while(i<=Array1.length-1){

    if(ispositive){

        if(Array1[i]<0){
            i++;
            ispositive=false;
            continue;
        }
        else if(Array1[i]>0){
            let j =i;
            while(Array1[j]>0 && j<Array1.length){
                j++;
            }
            if(Array1[j]<0){
                let temp=Array1[i];
                Array1[i]=Array1[j];
                Array1[j]=temp;
                ispositive=false;
            }
           

        }   
    }
    else{
        if(Array1[i]>0 && i<Array1.length){
            i++;
            ispositive=true;
            continue;
        }
        else if(Array1[i]<0 && i < Array1.length){
            let j =i;
            while(Array1[j]<0  && j< Array1.length){
                j++;
            }
            let temp=Array1[i];
            Array1[i]=Array1[j];
            Array1[j]=temp;
            ispositive=true;

        }
    }
i++;
    

}


console.log(Array1)