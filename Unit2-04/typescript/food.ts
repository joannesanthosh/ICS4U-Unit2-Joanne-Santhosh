/* This is a program prints out stuff.
 * @author  Joanne Santhosh
 * @version 1.0 
 * @since   2024-02-26
 */

import MrCoxallStack from './mrCoxallStack.ts'

// this function uses the MrCoxallStack
const foodStack = new MrCoxallStack()
console.log("The size of the stack is: " + foodStack.size)
console.log("Is the stack empty?: " + foodStack.isEmpty)
foodStack.push('fries')
foodStack.push('burger')
foodStack.push('pizza')
console.log(`\nFood items: ${foodStack.showStack()}`)
let topFood: string
topFood = foodStack.pop()!
console.log(`Popped food item: ${topFood}`)
console.log(`Food items: ${foodStack.peek()}`)
console.log("The size of the stack is: " + foodStack.size)
console.log("Is the stack empty?: " + foodStack.isEmpty)
console.log(`Emptying the stack: ${foodStack.clear()}`)
console.log("The size of the stack is: " + foodStack.size)
console.log("Is the stack empty?: " + foodStack.isEmpty)
console.log(`\nDone.`)