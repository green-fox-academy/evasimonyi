// Implement the Stack interface using your previous Node class

import MyNode from './linkedlist-node-implementation';

interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

export default class StackForStack implements Stack {
  stack: MyNode[];

  constructor() {
    this.stack = [];
  }

  empty(): boolean {
    return this.stack.length === 0;
  }

  peek(): string {
    if (!this.empty()) return this.stack[this.stack.length - 1].value;
    return 'no element in this stack';
  }

  push(value: string): void {
    let newNode: MyNode = new MyNode(value);
    this.stack.push(newNode);
  }

  pop(): string {
    if (this.stack.length > 0) {
      let poppedNode = this.stack.pop()!.value;
      return poppedNode;
    }
    return 'no element in this stack';
  }
}
