let Array1=[12,3,4,5,6]
let n=2;
let MainArray=[];

while(Array1.length-1 >=0){
    let t=0;
    let smallArray=[];
 while(smallArray.length<=n && smallArray.length<=Array1.length){
     smallArray.push(Array1[t])
     Array1.shift();

 }
   MainArray.push(smallArray);
}
console.log(MainArray);
