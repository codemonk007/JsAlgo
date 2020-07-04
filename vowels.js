let String_main="iiiii ooooo";
function vowels(String_){

    return String_.match(/[aeiou]/gi).length;
}

console.log(vowels(String_main));