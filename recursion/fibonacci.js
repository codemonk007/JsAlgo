sum = 0
function fibonacci(n){
    if(n == 0 ) return 0;
    if(n == 1) return 0;
    if(n == 2) return 1;
    else 
    sum = sum + fibonacci(n-1)+fibonacci(n-2);
    console.log(sum);
    return sum;    

}

console.log(fibonacci(5));