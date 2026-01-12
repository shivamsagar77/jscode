class linkedList{
    constructor(){
        this.head = null;
           this.length=0;
    }
    insertHead(data){
          const NewNode = new linkedListnode(data,this.head);
          this.head = NewNode;
          this.length++;
    }
    getbyIndex(index){
if(index <0 || index >=this.length) return null

let current = this.head;
for(let i=0;i<index;i++){
    current = current.next;
}
return current;
    }
}

class linkedListnode{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}


const ll = new linkedList();
ll.insertHead(2);
ll.insertHead(5);

console.log(ll);

module.exports = linkedList;