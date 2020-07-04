Array1=[1,13,14,70,100];
Array2=[2,15,20];
Array3=[];
let i=0;
let j=0;
while(Array1.length-1>=i || Array2.length-1>=j){

    if(Array1[i]<Array2[j] && Array1.length-1>=i){

        Array3.push(Array1[i])
        i++;        
    }
    else if(Array1[i]>Array2[j] && Array2.length-1>=j){
        Array3.push(Array2[j])
        j++;
    }
    else if(Array1[i] === Array2[j]){
        Array3.push(Array2[j])
        if(Array1.length>=i && Array2.length-1>=j){
            j++;
            i++;
        }
        else if(Array1.length-1>=i){
        
            i++;
        }
        else{
            j++;
        }
       
    }
    if(Array1.length-1<i){
        Array3.push(Array2[j])
        j++;
    }
    else if(Array2.length-1<j){
       
            Array3.push(Array1[i])
            i++;
    }
    
}


console.log(Array3);





    