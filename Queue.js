// Implement Stack

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  pop() {
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(3);
stack.pop();
console.log(stack.peek());
console.log(stack.size());

//Implement Queue Using Stack
class QueueUsingStack {
  constructor() {
    this.tempStack = new Stack();
    this.outputStack = new Stack();
  }
  enqueue(element) {
    this.tempStack.push(element);
  }
  dequeue() {
    if (this.outputStack.size() === 0) {
      while (this.tempStack.size() > 0) {
        this.outputStack.push(this.tempStack.pop());
      }
    }
    this.outputStack.pop();
  }
  peek() {
    if (this.outputStack.size() === 0) {
      while (this.tempStack.size() > 0) {
        this.outputStack.push(this.tempStack.pop());
      }
    }
    return this.outputStack.peek();
  }
  size() {
    return this.tempStack.size() + this.outputStack.size();
  }
}

const queueUsingStack = new QueueUsingStack();
queueUsingStack.enqueue(1);
queueUsingStack.enqueue(2);
queueUsingStack.enqueue(4);
queueUsingStack.enqueue(3);
queueUsingStack.dequeue();
console.log(queueUsingStack.peek());
console.log(queueUsingStack.size());
