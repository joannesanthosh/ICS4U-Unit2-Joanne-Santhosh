/* This is a program prints out stuff.
 * @author  Joanne Santhosh
 * @version 1.0 
 * @since   2024-02-26
 */

import MrCoxallStack from './mrCoxallStack.ts'

// this function uses the MrCoxallStack
const flowerStack = new MrCoxallStack()
console.log("The size of the stack is: " + flowerStack.size)
console.log("Is the stack empty?: " + flowerStack.isEmpty)
flowerStack.push('Rose')
flowerStack.push('Tulip')
flowerStack.push('Sunflower')
console.log(`\nFlowers: ${flowerStack.showStack()}`)
let topFlower: string
topFlower = flowerStack.pop()!
console.log(`Popped flower: ${topFlower}`)
console.log(`Flowers: ${flowerStack.peek()}`)
console.log("The size of the stack is: " + flowerStack.size)
console.log("Is the stack empty?: " + flowerStack.isEmpty)
console.log(`Emptying the stack: ${flowerStack.clear()}`)
console.log("The size of the stack is: " + flowerStack.size)
console.log("Is the stack empty?: " + flowerStack.isEmpty)
console.log(`\nDone.`)