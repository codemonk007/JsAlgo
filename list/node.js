class node{
    constructor(value,left=null,right=null){
       this.left=left,
       this.right = right;
       this.value = value;
    }
}
module.exports.node = node;