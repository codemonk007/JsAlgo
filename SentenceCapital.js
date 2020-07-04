let string1="Hello all the world";


let String_Array=string1.split(" ");
console.log(String_Array);
let temp_Array=[];

String_Array.forEach(element => {
    console.log(element[0].toUpperCase());
    // temp_Array=element[0].toUpperCase()+element.slice(1);
    temp_Array.push(element[0].toUpperCase()+element.slice(1))
});

console.log(temp_Array.join(" "));