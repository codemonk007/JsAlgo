let a = [4, 3, 2, 54, 23, 12, 10];
for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < a.length-i; j++) {

        if (a[j] > a[j + 1]) {
        let temp=a[j];
        a[j]=a[j+1];
        a[j+1]=temp;
        }
    }
    
}

console.log(a);