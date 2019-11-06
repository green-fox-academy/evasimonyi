// Implement the Queue interface using 2 previous Stack implementations

import { StackClass as Stack } from './stack-queue-array-implementation';
import StackClass from './stack-node';

interface Queue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

