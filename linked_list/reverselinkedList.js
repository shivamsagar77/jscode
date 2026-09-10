class linkedList{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let ll1 = new linkedList(10);
let ll2 = new linkedList(20);
let ll3 = new linkedList(30);


ll1.next = ll2;
ll2.next = ll3;


let head = ll1;
let current = head;
let next;
let prev = null;

while(current !== null){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
}

head = prev;
current = head;

while(current !== null){
    console.log(current.value);
    current = current.next;
}