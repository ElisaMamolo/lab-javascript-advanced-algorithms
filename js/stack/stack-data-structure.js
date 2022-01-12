class Stack {
  //STACK is LIFO (last in, first out)
  //stack behaves like a JS array

  //We need to take into consideration also 2 extra cases: 
  //Stack Overflow occurs when we try to add an element into a stack that is already full.
  //Stack Underflow occurs when we try to get an element from an empty stack.

  constructor() {
    //used to store variables inside the stack
    this.stackControl = [];
    //max amount of items that stack can hold
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length > this.MAX_SIZE) {
       return false;
    } else {
      return true;
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
   } else if (this.stackControl.length > 0) {
     return false;
   }
  }

  push(item) {
    let canPush = this.canPush();
    if (canPush === true) {
      this.stackControl.push(item);
    } else {
      //Stack overflow case
      throw new Error('STACK_OVERFLOW');
    }
    
  }

  pop() {
    //remove last element in the stack
    //first check if stack holds any items
    let isEmpty = this.isEmpty();

    if (isEmpty === false) {
      this.stackControl.pop();
    } else {
      //have a case of Stack Underflow
      throw new Error('STACK_UNDERFLOW');
    }
  }

  display() {
    //return items in stack
    for (let i = 0; i < this.stackControl.length; i++) {
      return this.stackControl[i];
    }
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
