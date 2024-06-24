// Do not use arrays!

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  removeLast() {
    if (!this.head) return;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.length--;
  }

  removeFirst() {
    if (!this.head) return;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
  }

  removeAt(index, value){
    if (index < 0 || index >= this.length) return;

    if (index === 0) {
      this.removeFirst();
      return;
    }

    if (index === this.length - 1) {
      this.removeLast();
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    this.length--;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  getFirst() {
    return this.head ? this.head.value : null;
  }

  getLast() {
    return this.tail ? this.tail.value : null;
  }

  getAt(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
}
