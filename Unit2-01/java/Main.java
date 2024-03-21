/* 
 * This is a program that prints out stuff.
 * @author  Joanne Santhosh
 * @version 1.0
 * @since   2024-02-26
 */

 import java.util.Stack;

 /**
  * This is a standard calculation program.
  */

 class Main {

     /**
      * The starting calculateBoardFoot() function.
      *
      * @param args using args
      *
      */

      public static void main(String[] args) {
	 // Create stacks for different types of items
	 final Stack<String> foodStack = new Stack<>();
	 final Stack<String> cityStack = new Stack<>();
	 final Stack<String> flowerStack = new Stack<>();

	 // Push items onto the food stack
	 foodStack.push("fries");
	 foodStack.push("burger");
	 foodStack.push("pizza");

	 // Push items onto the city stack
	 cityStack.push("New York City");
	 cityStack.push("Tokyo");
	 cityStack.push("Los Angeles");

	 // Push items onto the flowers stack
	 flowerStack.push("Rose");
	 flowerStack.push("Tulip");
	 flowerStack.push("Sunflower");

	 // Print out the stacks
	 System.out.println("Food items: " + foodStack.toString());
	 System.out.println("Cities: " + cityStack.toString());
	 System.out.println("Flowers: " + flowerStack.toString());
     }
 }
