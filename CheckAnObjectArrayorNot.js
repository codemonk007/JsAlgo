function Checktype(param){
return Object.prototype.toString.call(param) === '[object Array]'? true:false;
}
console.log(Checktype([1,2,3,4]));
console.log(Checktype({"hi":"hello"}));
//using is Array supported in chrome , firefox.
console.log(Array.isArray([1,2,3,4]));
console.log(Array.isArray({"hi":"hello"}));

