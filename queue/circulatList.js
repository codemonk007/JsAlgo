//circular
function Add(value){
    if(!this.head){
        this.head =this.tail = new Node(value);
        this.tail.next = this.head;
    }
    else{
        temp = this.head;
        let n = new node(value);
        while(temp.next != this.head){
            temp = temp.next;
        }
        temp.next = n;
        n.next = this.head;
        this.tail = temp.next;
    }
}

function Remove(value){
    if(!this.head){
       return -1;
    }
    else{
        temp = this.head;
        let prev = null
        while(temp.value != value){
            prev = temp;
            temp = temp.next; 
        }
        prev.next = temp.next;
        if(temp.next == this.head){
            this.tail = prev.next
        }
    }
}
