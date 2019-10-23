// Implement the Stack, Queue interfaces using arrays

// stack

interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

export class StackClass implements Stack {
  items: string[];

  constructor() {
    this.items = [];
  }

  empty(): boolean {
    return this.items.length === 0;
  }

  peek(): string {
    if (!this.empty()) return this.items[this.items.length - 1];
    return 'no element in this stack';
  }

  push(element: string): void {
    this.items.push(element);
  }

  pop(): string {
    if (!this.empty()) return this.items.pop()!;
    return 'no element in this stack';
  }
}

// queue

interface Queue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

export class QueueClass implements Queue {
  items: string[];

  constructor() {
    this.items = [];
  }

  empty(): boolean {
    return this.items.length === 0;
  }

  peek(): string {
    if (!this.empty()) return this.items[this.items.length - 1];
    return 'no element in this stack';
  }

  add(element: string): void {
    this.items.push(element);
  }

  remove(): string {
    if (!this.empty()) {
      let firstElement = this.items[0];
      this.items.shift();
      return `${firstElement} is removed from queue`
    };
    return 'no element in this stack';
  }
}
