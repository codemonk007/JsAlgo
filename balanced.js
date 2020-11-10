function balancedBrackets(string) {
    // Write your code here.
   let tA =[];
   for (let i = 0; i < string.length; i++) {
      if(string.charAt(i) =='['||string.charAt(i) =='{'||string.charAt(i) =='(')  {
        tA.push(string.charAt(i));
      }
      if(string.charAt(i) ==']'||string.charAt(i) =='}'||string.charAt(i) ==')')  {
        let t = tA.pop();
          if(string.charAt(i)==']'){
            if(t !=='['){
              return false;
            }
          }
          else if(string.charAt(i)=='}'){
            if(t !=='{'){
              return false;
            }
          }
          else if(string.charAt(i)==')'){
            if(t !=='('){
              return false;
            }
          }
      }
   }
   if(tA.length) return false;
    return true;
  }
  console.log(balancedBrackets("([])(){}(())"));
  