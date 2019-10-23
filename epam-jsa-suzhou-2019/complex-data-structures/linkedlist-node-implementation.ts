// Implement the LinkedList interface using your own Node class

// Single Linked list: has a pointer to the next one but not for their previous node.
// Doubly Linked List: the nodes have a next and previous pointer (head has a 
//   next pointer but not previous and the tail node has a prev pointer but not 
//   a next one).

interface LinkedList {
  add(value: string, index?: number): void;
  get(index: number): string;
  removeItem(value: string): void;
  remove(index: number): string;
  size(): number;
}

// Doubly Linked List implementation with own class

export default class MyNode {
  value: string;
  next: null | MyNode;
  prev: null | MyNode;

  constructor(value: string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList implements LinkedList {
  head: null | MyNode;
  tail: null | MyNode;
  list: MyNode[];

  constructor() {
    this.head = null;
    this.tail = null;
    this.list = [];
  }

  add(value: string, index?: number): void {
    let newNode: MyNode = new MyNode(value);
    if (!this.head) {
      this.list.push(newNode);
      this.head = newNode;
    } else if (index) {
      this.list.splice(index, 0, newNode);
      newNode.prev = this.list[this.list.indexOf(newNode) - 1];
      newNode.next = this.list[this.list.indexOf(newNode) + 1];
    } else {
      this.list.push(newNode);
      if (this.list.length === 2) {
        this.head.next = newNode;
        newNode.prev = this.head;
      } else {
        newNode.prev = this.list[this.list.indexOf(newNode) - 1];
      }
      this.tail = newNode;
    }
  }

  get(index: number): string {
    return this.list[index].value;
  }

  removeItem(value: string): void {
    this.list.forEach((element) => {
      if (element.value === value) {
        this.list.splice(this.list.indexOf(element), 1);
      }
    })
  }

  remove(index: number): string {
    this.list.splice(index, 1);
    return this.list[index].value;
  }

  size(): number {
    return this.list.length;
  }
}
