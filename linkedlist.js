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

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  // todo
  if (head === null) return [];
  
  const results = [];
  let curr = head;
  
  while(curr !== null) {
     results.push(curr.val);
     curr = curr.next;
  }
  
  return results;
};

module.exports = {
  linkedListValues,
};


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
  // todo
  if (head === null) return 0;
  let sum = 0;
  let curr = head;
  
  while (curr !== null) {
    sum += curr.val;
    curr = curr.next;
  }
  
  return sum;
};

module.exports = {
  sumList,
};


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  // todo
  
  if (head === null) return false;
  
  let curr = head;
  
  while(curr !== null) {
    if (curr.val === target) {
      return true;
    }
    curr = curr.next;
  }
  
  return false;
};

module.exports = {
  linkedListFind,
};


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
  // todo
  
  if (head === null) return null;
  
  let nodeArr = [];
  let curr = head;
  
  while (curr !== null) {
    nodeArr.push(curr.val);
    curr = curr.next;
  }
  
  if (nodeArr.length < index) return null;
  
  return nodeArr[index];
};

module.exports = {
  getNodeValue,
};

