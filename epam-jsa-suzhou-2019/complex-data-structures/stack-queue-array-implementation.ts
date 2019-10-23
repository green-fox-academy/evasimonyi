// Implement the Stack, Queue interfaces using arrays

// stack

interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

class Stack {
  items: string[];

  constructor() {
    this.items = [];
  }

  empty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.empty()) return this.items[this.items.length - 1];
    return null;
  }

  push(element: string) {
    this.items.push(element);
  }

  pop() {
    if (!this.empty()) return this.items.pop();
    return null;
  }
}

// queue

interface Queue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

class Queue {
  items: string[];

  constructor() {
    this.items = [];
  }

  empty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.empty()) return this.items[this.items.length - 1];
    return null;
  }

  add(element: string) {
    this.items.push(element);
  }

  remove() {
    if (!this.empty()) return this.items.shift();
    return null;
  }
}
