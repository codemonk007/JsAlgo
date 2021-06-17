var node = require('./node').node;
class list{

    constructor(){
        this.head = null;
    }
    add(value){
        if(!this.head){
            this.head = new node(value)
            return this.head
        }
        else{
            let temp = this.head;
            while(temp.next){
                temp= temp.next
            }
            temp.next = new node(value)
        }
        return this.head;
    }
    addFirst(value){
        if(!this.head){
            this.head = new node(value)
            return this.head
        }
        else{
            let temp = new node(value);
            temp.next = this.head;
            this.head = temp;
        }
        return this.head;
    }
    rwmovefirst(){
        if(!this.head){
            return -1;
        }
        else{
            let temp = this.head.next;
            this.head = temp
            
        }
    return this.head; 
    }
    removeAt(pos){
        let count = 0;
        let temp = this.head;
        let prev = null;
        while(count <= pos){
            prev = temp;
            temp = temp.next;
            count +=1;
        }
        if(count-1 == pos){
            prev.next = temp.next
        }
        return this.head;
    }
}
module.exports.list = list;