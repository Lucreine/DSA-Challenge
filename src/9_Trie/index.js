class Node {
  constructor() {
    this.children = {};
    this.EndWord = false;
  }
}

export class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.EndWord = true;
  }

  retrieve(prefix) {
    let currentNode = this.root;
    for (const char of prefix) {
      if (!currentNode.children[char]) {
        return null;
      }
      currentNode = currentNode.children[char];
    }
    return this._collectAllWords(currentNode, prefix);
  }

  _collectAllWords(node, prefix) {
    const words = [];
    if (node.EndWord) {
      words.push(prefix);
    }
    for (const char in node.children) {
      words.push(...this._collectAllWords(node.children[char], prefix + char));
    }
    return words;
  }
}

