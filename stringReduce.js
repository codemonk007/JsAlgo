let string1="hello";

let str2=string1.split('').reduce((reversred,char)=>{

    return char+reversred;
},'');

console.log(str2);