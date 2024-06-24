class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insert(value) {
    const newNode = new Node(value);
    this.children.push(newNode);
    return newNode;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new 
      Node(value);
      return this.root;
    }
    return this.root.insert(value);
  }

  BFS(visitor) {
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      visitor(node.value);
      for (const child of node.children) {
        queue.push(child);
      }
    }
  }

  preOrderDFS(visitor, node = this.root) {
    if (!node) return;
    visitor(node.value);
    for (const child of node.children) {
      this.preOrderDFS(visitor, child);
    }
  }

  postOrderDFS(visitor, node = this.root) {
    if (!node) return;
    for (const child of node.children) {
      this.postOrderDFS(visitor, child);
    }
    visitor(node.value);
  }
}
