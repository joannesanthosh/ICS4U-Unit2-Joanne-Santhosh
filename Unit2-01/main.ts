/*
 * This is a program prints out stuff.
 * @author  Joanne Santhosh
 * @version 1.0 
 * @since   2024-02-26
 */

import MrCoxallStack from './mrCoxallStack.ts'

// this function uses the MrCoxallStack
const foodStack = new MrCoxallStack()
foodStack.push('fries')
foodStack.push('burger')
foodStack.push('pizza')

const cityStack = new MrCoxallStack()
cityStack.push('New York City')
cityStack.push('Tokyo')
cityStack.push('Los Angeles')

const flowerStack = new MrCoxallStack()
flowerStack.push('Rose')
flowerStack.push('Tulip')
flowerStack.push('Sunflower')

console.log(`Food items: ${foodStack.showStack()}\n`)
console.log(`Cities: ${cityStack.showStack()}\n`)
console.log(`Flowers: ${flowerStack.showStack()}\n`)
