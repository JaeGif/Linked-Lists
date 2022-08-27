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
  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false.
    let currentNode = this.head;
    if (!this.head) {
      return false;
    }
    if (value === this.head.data) {
      return true;
    }
    while (currentNode.next !== null) {
      currentNode = currentNode.next;

      if (value === currentNode.data) {
        return true;
      }
    }
    return false;
  }
  find(value) {
    // returns the index of the node containing value, or null if not found.
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (value === currentNode.data) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return null;
  }
  toString() {
    // represents to linked list as a string diagram for easy visualization
    let stringDiagram = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      stringDiagram += `( ${currentNode.data} ) -> `;
      currentNode = currentNode.next;
    }
    return (stringDiagram += null);
  }
  insertAt(value, index) {
    // insert value at the specific index
    if (index === 0) {
      this.prepend(value);
    }

    let currentNode = this.head.next;
    let previousNode = this.head;
    let eleIndex = 1;

    while (previousNode.next !== null) {
      if (eleIndex === index) {
        let newNode = new ListNode(value);
        previousNode.next = newNode;
        newNode.next = currentNode;
        return;
      }
      currentNode = currentNode.next;
      previousNode = previousNode.next;
      eleIndex++;
    }
    if (eleIndex === index) {
      this.append(value);
    }
    return;
  }
}

// Example Linked List

let instantiatedLinkedList = new LinkedList(new ListNode(0));
instantiatedLinkedList.append(1);
instantiatedLinkedList.append(2);
instantiatedLinkedList.append(3);
instantiatedLinkedList.append(4);
instantiatedLinkedList.append(5);
instantiatedLinkedList.insertAt(15, 0);
console.log(instantiatedLinkedList.toString());
