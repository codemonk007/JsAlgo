String.prototype.smallCase=function(){
    let some=this.split('');
    return some.map((e)=>e.toLowerCase()).join('');
}

let name="HELLO";
console.log(name.smallCase());