/*
 * This program outputs stuff
 * @author  Joanne Santhosh 
 * @version 1.0 
 * @since   2024-02-26
 */

class MrCoxallStack {
    private stackAsList: string[]
  
    // variables
    constructor() {
      this.stackAsList = []
    }
  
    // checks if stack is empty
    get isEmpty() {
      return this.stackAsList.length == 0
    }

    // return top item of stack
    public get peek() {
        return this.stackAsList[this.stackAsList.length - 1]
    }
  
    // returns stack size
    get size() {
        return this.stackAsList.length
    }
  
    showStack(): string {
      // return the stack
      let stackValues: string = ""
  
      for (const value of this.stackAsList) {
  stackValues += value + ","
      }
      stackValues = stackValues.slice(0, -1) // Remove the trailing comma
  
      return stackValues
    }

    // clear all items off stack
    public clear() {
        this.stackAsList = []
    }
  
    push(pushedString: string): void {
      // push the value onto the stack
      this.stackAsList.push(pushedString)
    }
  
    // pop item from end of list and return value
    pop(): string {
      // return top of the stack
      let returnValue: string = ""
  
      if (this.stackAsList.length > 0) {
        const topItem: string = this.stackAsList.pop()!
        returnValue = topItem
      } else {
        returnValue = "The stack is empty!"
      }
  
      return returnValue
    }
  }
  
  // Export the class
  export default MrCoxallStack