function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let str='';
    for (let i = 0; i < string.length; i++) {
      if(string[i+key]){
        str = str.concat(string[i+key])
      }
      else{
        let t = (i+key) - string.length;
        console.log(t);      
        str = str.concat(string[t])
      }
    }
    return str;
  }
  console.log(caesarCipherEncryptor("ABCDEF",2));
  