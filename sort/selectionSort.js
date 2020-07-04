let a=[13,34,22,31,1,2,3];

for (let i = 0; i < a.length; i++) {
        let imin=i;
        let value=a[i]
    for (let j = i+1; j < a.length; j++) {
        if(a[j]<a[imin]){
            imin=j;
        }
    }
    let temp=a[i];
    a[i]=a[imin];
    a[imin]=temp;
    
}

console.log(a);