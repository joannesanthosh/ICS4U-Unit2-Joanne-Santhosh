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
  get isEmpty(): boolean {
      if (this.stackAsList.length > 0) {
          return false
      } else {
          return true
      }
  }

  // returns stack size
  get size(): number {
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