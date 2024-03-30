/*
 * This program uses getters
 * @author  Joanne Santhosh 
 * @version 1.0 
 * @since   2024-02-26
 */

export class MrCoxallStack {
    private stackAsList: string[]

    public constructor() {
      this.stackAsList = []
    }

    public get isEmpty() {
      let stackValues = "This list is empty."

      if (this.stackAsList.length > 0) {
        stackValues = this.stackAsList[0]
        for (let counter = 1; counter < this.stackAsList.length; counter++) {
          stackValues = stackValues + ", " + this.stackAsList[counter]
        }
      }
    
      return stackValues
    }

    public push(pushedString: string): void {
      // push the value onto the stack
      this.stackAsList.push(pushedString)
    }

    public pop(): string {
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
  export default MrCoxallStack;