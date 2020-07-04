let a=[32,31,22,12,21,20];

for(let i=0;i<a.length;i++){
    let hole=i;
    let value=a[i];
    while(hole>0 && a[hole-1]>value){
        a[hole]=a[hole-1];
        hole=hole-1;
    }
    a[hole]=value;
}

console.log(a);