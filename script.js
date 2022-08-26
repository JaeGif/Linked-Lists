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
  size() {
    let currentNode = this.head;
    let count = 1;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }
  head() {
    return this.head;
  }
  tail() {
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }
  at(index) {
    let currentNode = this.head;
    let eleIndex = 0;
    while (eleIndex < index) {
      currentNode = currentNode.next;
      eleIndex++;
    }
    return currentNode;
  }
}

// Example Linked List

let instantiatedLinkedList = new LinkedList(new ListNode(15));
instantiatedLinkedList.prepend(5);
console.log(instantiatedLinkedList.at(3));
