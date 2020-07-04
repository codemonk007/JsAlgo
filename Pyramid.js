
let n=6;
process.stdin.setEncoding('utf8');

let mid=Math.floor((2*n-1)/2);
// console.log(temp)
for (let i = 0; i < n; i++) {
    
   for (let j = 0; j<2*n-1; j++) {
   
    // print("Hi");
    
    
    if(j===mid ||(j>=mid-i && j<=mid+i)){
        process.stdout.write('*');
    }
    else{
      process.stdout.write(' ');
    }

      
   }
   console.log("")
    
}