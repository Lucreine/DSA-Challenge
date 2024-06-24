class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  BFS(visitor) {
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      visitor(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  preOrderDFS(visitor, node = this.root) {
    if (!node) return;
    visitor(node.value);
    this.preOrderDFS(visitor, node.left);
    this.preOrderDFS(visitor, node.right);
  }

  inOrderDFS(visitor, node = this.root) {
    if (!node) return;
    this.inOrderDFS(visitor, node.left);
    visitor(node.value);
    this.inOrderDFS(visitor, node.right);
  }

  postOrderDFS(visitor, node = this.root) {
    if (!node) return;
    this.postOrderDFS(visitor, node.left);
    this.postOrderDFS(visitor, node.right);
    visitor(node.value);
  }

  get(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return current.value;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }
}