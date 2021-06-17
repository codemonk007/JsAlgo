var node = require('./node').node;

class tree{

    constructor(){
        this.root = null;
    }

    add(value){
        if(!this.root){
            this.root = new node(value);
        }
        return addnode(this.root,value)
    }
    addnode(root,value){
        if(root.value < value){
            if(!this.root.left){
                this.root.left = new node(value);
            }
            return this.addnode(root.left,value)
        }
        else if(root.value > value){
            if(!root.right){
                root.right = new node(value);
            }
        }
    }

    getMax(){
        if(!root){
            return null;
        }
        let temp = this.root;
        while(temp.right !=null){
            temp = temp.right;
        }
        return temp.value;
    }

    getMin(){
        if(!this.root){
            return null;
        }
        let temp = this.root;
        while(temp.left !=null){
            temp = temp.left;
        }
        return temp.value;
    }
    temp =[];
    dfs(root){
    if(!root){
        return null;
    }        
    if(root.left == null || root.right == null){
        this.temp.push(root.value)
    }
    if(root.left)this.dfs(root.left);
    if(root.rght) this.dfs(root.right);
    }
    //dfs
    //bfs
    //inorder/
    // preorder
    // postorder
    //invertBSt
    // closestinBSt

}