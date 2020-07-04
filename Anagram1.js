let string1="helloworld".split('');
let string2="worldhello".split('');

let string1_Map=new Map();
let string2_Map=new Map();
string1.forEach(Element=>{
    // console.log(string1_Map.get(Element))
    if(!string1_Map.get(Element)){
        string1_Map.set(Element,1);
    }
    else{
        let index=string1_Map.get(Element);
        string1_Map.set(Element,index+1);
    }
})
// console.log(string1_Map)
string2.forEach(Element=>{
    console.log(string1_Map.get(Element))
    if(!string2_Map.get(Element)){
        string2_Map.set(Element,1);
    }
    else{
        let index=string2_Map.get(Element);
        string2_Map.set(Element,index+1);
    }
})

let result="";


console.log(string1_Map.keys())
console.log(typeof(string1_Map.entries()))
// string1_Map.keys().forEach(Element=>{

//     // if(string1_Map.get(Element)===string2_Map.get(Element)){
//     //     return;
//     // }
//     // else{
//     //     result="fail"
//     //     return;
//     // }

//     console.log(Element)

// });


var get_entries = string1_Map.keys(); 
  
console.log("----------entries---------"); 
for(var ele of get_entries) {
    console.log(ele)
    if(string1_Map.get(ele)===string2_Map.get(ele)){
        console.log(string1_Map.get(ele))
        console.log(">>"+string2_Map.get(ele))
        result="pass";
        continue;

    }
    else{
        result="fail"
        break;
    }
}



console.log(result)