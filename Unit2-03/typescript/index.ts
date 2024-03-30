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
console.log(`Food items: ${foodStack.showStack()}`)
console.log("The size of the stack is: " + foodStack.size)
console.log("Is the stack empty?: " + foodStack.isEmpty)

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
console.log(`Flowers: ${flowerStack.showStack()}`)
console.log("The size of the stack is: " + flowerStack.size)
console.log("Is the stack empty?: " + flowerStack.isEmpty)

console.log(`\nDone.`)