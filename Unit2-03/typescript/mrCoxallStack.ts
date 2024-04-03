/*
 * This program uses getters
 * @author  Joanne Santhosh 
 * @version 1.0 
 * @since   2024-02-26
 */

class MrCoxallStack {

  // variables
  constructor() {
    self.strstack = []
  }

  // checks if stack is empty
  get isEmpty() {
    return self.strstack.length == 0
  }

  // returns stack size
  get size() {
    return self.strstack.length
  }

  // show full stack seperated by commas
  get show() {
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

  // push item to end of list
  push(input) {
    self.strstack.push(input)
  }

  // pop item from end of list and return value
  pop() {
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