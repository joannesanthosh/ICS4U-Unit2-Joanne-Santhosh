/*
 * This program outputs stuff
 * @author  Joanne Santhosh 
 * @version 1.0 
 * @since   2024-02-26
 */

class MrCoxallStack {

    private strstack: string[]
    
      // variables
      constructor() {
        self.strstack = []
      }
    
      // checks if stack is empty
      public get isEmpty() {
        return self.strstack.length == 0
      }
    
      // return top item of stack
      public get peak() {
        return self.strstack[self.strstack.length - 1]
      }
    
      // returns stack size
      public get size() {
        return self.strstack.length
      }
    
      // show full stack separated by commas
      public get show() {
        let values = ""
        if (self.strstack[0]) {
          for (let counter = 0; counter < self.strstack.length; counter++) {
            values = values + self.strstack[counter] + ", "
          }
          values = values.substring(0, values.length-2)
        } else {
          values = "stack is empty"
        }
        return values
      }
    
      // clear all items off stack
      public clear() {
        self.strstack = []
      }
      
      // push item to end of list
      public push(input) {
        self.strstack.push(input)
      }
    
      // pop item from end of list and return value
      public pop() {
        let removed = ""
        if (self.strstack[0]) {
          removed = self.strstack[self.strstack.length - 1]
        } else {
          removed = "nothing to remove"
        }
        self.strstack.splice(-1)
        return removed
      }
    }
    
    // Export the class
    export default MrCoxallStack