// can you slow fast pointer

class linkedList {
    constructor(value){
        this.value= value;
        this.next = null;
    }
}

 let ll1 = new linkedList(10);
 let ll2 = new linkedList(20);
 let ll3 = new linkedList(30);
 let ll4 = new linkedList(40);
 let ll5 = new linkedList(50);
 let ll6 = new linkedList(60);
 let ll7= new linkedList(70);
 let ll8 = new linkedList(80);
 ll1.next = ll2;
 ll2.next = ll3;
 ll3.next = ll4;
 ll4.next = ll5;
 ll5.next = ll6;
 ll6.next = ll7;
 ll7.next = ll8;

 let head = ll1;

 let slow = head;
 let  fast = head;

 while(fast !==null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
 }

 console.log(slow.value)