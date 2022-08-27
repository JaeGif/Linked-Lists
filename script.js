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
  pop() {
    if (!this.head) {
      return null;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let tail = this.head.next;
    let secondToTail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
      secondToTail = secondToTail.next;
    }

    secondToTail.next = null;
    tail = null;
    return this.head;
  }
}

// Example Linked List

let instantiatedLinkedList = new LinkedList(new ListNode(1));
