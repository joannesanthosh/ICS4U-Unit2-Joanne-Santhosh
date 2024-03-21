/*
 * This program is a number guessing game
 * @author  Joanne Santhosh 
 * @version 1.0 
 * @since   2024-02-26
 */

 class MrCoxallStack {
   stackAsList: string[]

   constructor() {
     this.stackAsList = []
   }

   push(pushedString: string): void {
     // push the value onto the stack
     this.stackAsList.push(pushedString)
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
 }

 // Export the class
 export default MrCoxallStack;
