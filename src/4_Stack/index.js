// Do not use arrays!
export class Stack {
  constructor(){
    this.Stack = [];
  }
  push(value) {
    this.Stack.push(value);
  }

  pop() {
    if (this.Stack.length === 0) {
      return null;
    }
    return this.Stack.pop();

  }

  peek() {
    if (this.Stack.length === 0) {
      return null;
    }
    return this.Stack[this.Stack.length - 1];

  }
}
