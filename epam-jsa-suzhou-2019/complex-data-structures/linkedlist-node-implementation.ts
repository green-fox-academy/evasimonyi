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

export class LinkedListClass implements LinkedList {
  head: null | MyNode;
  tail: null | MyNode;
  lengthOfList: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.lengthOfList = 0;
  }

  add(value: string, index?: number): void {
    let newNode: MyNode = new MyNode(value);
    let current;
    if (this.head === null) {
      this.head = newNode;
    } else if (index && index < this.lengthOfList) {
      // index?
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current = newNode;
    }
    this.lengthOfList++;
  }

  get(index: number): string { }
  removeItem(value: string): void { }
  remove(index: number): string { }

  size(): number {
    return this.lengthOfList;
  }

}

