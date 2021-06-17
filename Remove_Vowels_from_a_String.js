var removeVowels = function(s) {
    newString ="";
    for (let i = 0; i < s.length; i++) {
        reg = new RegExp("[aeiou]","gi");        
        if(!reg.test(s[i])){
            newString=newString+s[i];
        }
    }
    return newString;
};
removeVowels("IamGanapati")