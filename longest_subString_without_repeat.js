let t = "pwwkew";
let result = {}
let resString = "";
for (const key in t) {
    console.log(t[key]);
    if(!result[t[key]]){
        resString = resString+t[key];
        result[t[key]] = 1;
    }
    else{
        result[t[key]] = result[t[key]]+1
    }
}
console.log(result);
console.log(resString.length);


