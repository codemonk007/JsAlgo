let temp =[5,1,-1,2,-3]

let temp1 = temp.sort((a,b)=>{
  if (a > b) {
    return 1;
 }
 if (a < b) {
    return -1;
 }
 return 0;

})

console.log(temp1);
