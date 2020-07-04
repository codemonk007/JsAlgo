let String1="helloworld".split('');
let String2="helloworld".split('');
let String1_Json={};
let String2_Json={};
String1.forEach(element => {
if(String1_Json[element]){
String1_Json[element]=String1_Json[element]+1;
}
else{
String1_Json[element]=1;
}
});



console.log(String1_Json)
console.log("<><><><>")
String2.forEach(element => {
    if(String2_Json[element]){
    String2_Json[element]=String2_Json[element]+1;
    }
    else{
    String2_Json[element]=1;
    }
    });


console.log(String2_Json)

console.log("------------");
console.log(String1_Json===String2_Json)
console.log(JSON.stringify(String1_Json)===JSON.stringify(String2_Json));


