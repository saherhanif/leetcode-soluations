class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const hasCycle = (head) => {
//   const set = new Set();

//   while (head !== null) {
//     if (set.has(head)) {
//       return true;
//     }

//     set.add(head);
//     head = head.next;

//     return false;
//   }
// };

const hasCycle = (head) => {
  let node1 = head;
  let node2 = head;

  while (node2 !== null && node2.next !== null) {
    node1 = node1.next;
    node2 = node2.next.next;

    if (node1 === node2) {
      return node1;
    }
  }
  return null;
};
const head = new ListNode(3);
const first = new ListNode(2);
const second = new ListNode(0);
const third = new ListNode(-4);

head.next = first;
first.next = second;
second.next = third;
third.next = first;

console.log("results: ", hasCycle(head));
