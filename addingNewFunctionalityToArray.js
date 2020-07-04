Array.prototype.Average=function(){
    var sum =this.reduce(function(next,prev){
        return prev+next;
    })
    return sum/this.length;
}
var arr = [1, 2, 3, 4, 5];
var avg = arr.Average();
console.log(avg); // => 3