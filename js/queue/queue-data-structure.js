class Queue {
  //queue is FIFO (First-In-First-Out) structure
  //remember of Queue Overflow and Queue Underflow.
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
   } else {
     return false;
   }
  }

  isEmpty() {
    if (this.queueControl.length > 0) {
      return false;
   } else {
     return true;
   }
  }

  enqueue(item) {
    let canEnqueue = this.canEnqueue();
    if (canEnqueue === true) {
      this.queueControl.push(item);
      return this.queueControl;
    } else {
      //Stack overflow case
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue() {
    let isEmpty = this.isEmpty();
    if (isEmpty === false) {
    //remove the first item
    const  firstElement = this.queueControl.shift();
      return firstElement;
    } else {
      //have a case of Stack Underflow
      throw new Error('QUEUE_UNDERFLOW');
    }
  }

  display() {
    for (let i = 0; i < this.queueControl.length; i++) {
      return this.queueControl;
    }
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
