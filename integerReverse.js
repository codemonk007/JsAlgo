let num=1232;
let reverse=0;
while(num >0){
    reverse=(reverse*10)+Math.floor((num%10));
    num=Math.floor(num/10);
}
console.log(reverse);