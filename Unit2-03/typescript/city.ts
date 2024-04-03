/* This is a program prints out stuff.
 * @author  Joanne Santhosh
 * @version 1.0 
 * @since   2024-02-26
 */

import MrCoxallStack from './mrCoxallStack.ts'

// this function uses the MrCoxallStack
const cityStack = new MrCoxallStack()
console.log("The size of the stack is: " + cityStack.size)
console.log("Is the stack empty?: " + cityStack.isEmpty)
cityStack.push('New York City')
cityStack.push('Tokyo')
cityStack.push('Los Angeles')
console.log(`\nCities: ${cityStack.showStack()}`)
let topCity: string
topCity = cityStack.pop()!
console.log(`Popped city: ${topCity}`)
console.log(`City: ${cityStack.showStack()}`)
console.log("The size of the stack is: " + cityStack.size)
console.log("Is the stack empty?: " + cityStack.isEmpty)
console.log(`\nDone.`)