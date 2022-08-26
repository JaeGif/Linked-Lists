class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(value) {
    if (!this.head) {
      this.head = new ListNode(value);
      return this.head;
    }
    let currentNode = this.head;
    console.log(currentNode);
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new ListNode(value);

    return this.head;
  }
  prepend(value) {
    let newHead = new ListNode(value);
    newHead.next = this.head;
    this.head = newHead;
    return this.head;
  }
}

// Example Linked List

let instantiatedLinkedList = new LinkedList(new ListNode(15));
instantiatedLinkedList.prepend(5);
console.log(instantiatedLinkedList.head);
