var reverseVowels = function(k) {
    s = k.split("");
    let prvioudIndex = -1;
    for (let i = 0; i<s.length; i++) {
       reg = new RegExp("[aeiou]","gi");
       if(reg.test(s[i]) && s[i] !==" "){
         if(prvioudIndex > -1){
            let temp = s[i];
            s[i] = s[prvioudIndex];
            s[prvioudIndex] = temp;
            prvioudIndex = i;
         }
         else{
             prvioudIndex = i;
         }

       }
    }
    return s.join("");
};


console.log(reverseVowels("race car"));