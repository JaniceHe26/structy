class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

//link the nodes together; 

// d.next = null;

// A -> B -> C -> D -> null;

// const printLinkedList = (head) => {
//   let current = head;

//   while(current !== null) {
//     console.log(current.value);
//     current = current.next;
//   }
// };

// recursion
const printLinkedList = (head) => {
  //base case
  if (head === null) return;
  console.log(head.val);
  printLinkedList(head.next);
}

a.next = b;
b.next = c;
c.next = d;

console.log(printLinkedList(a));
