// Do not use arrays!

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.size) {
      throw new Error('Index out of bounds');
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
    this.size++;
  }

  removeFirst() {
    if (!this.head) {
      throw new Error('Empty list');
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }

  removeLast() {
    if (!this.tail) {
      throw new Error('Empty list');
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    if (index === 0) {
      this.removeFirst();
      return;
    }
    if (index === this.size - 1) {
      this.removeLast();
      return;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.size--;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return value;
      }
      current = current.next;
    }
    return null;
  }

  getFirst() {
    if (!this.head) {
      throw new Error('Empty list');
    }
    return this.head.value;
  }

  getLast() {
    if (!this.tail) {
      throw new Error('Empty list');
    }
    return this.tail.value;
  }

  getAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
}