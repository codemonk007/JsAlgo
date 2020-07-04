let Array1=[1,2,3,4,5,6,7,8];

let iterator=4;
while(iterator>=0){
    Array1.unshift(Array1.pop());
    // Array1.push(Array1.shift());
    iterator--;
}

console.log(Array1);

// function arrayRotate(arr, reverse) {
//     if (reverse) arr.unshift(arr.pop());
//     else arr.push(arr.shift());
//     return arr;
//   }


// arr1 = arr1.concat(arr1.splice(0,2)); /

// Array.prototype.rotateRight = function( n ) {
//     this.unshift.apply( this, this.splice( n, this.length ) )
//     return this;
//   }