/**
 * This is a program prints out stuff.
 * @author  Joanne Santhosh
 * @version 1.0
 * @since   2024-02-26
 */

 import java.util.ArrayList;
 import java.util.List;

 /**
  This is a standard program.
  */

  public class MrCoxallStack {

      /**
       * Represents a stack data structure implemented using a List.
       * This list stores elements as strings.
       */

     private List<String> stackAsList;

     /**
      * Constructs a new instance of MrCoxallStack.
      * Initializes the stack with an empty ArrayList.
      *
      */

     public MrCoxallStack() {
         this.stackAsList = new ArrayList<>();
     }

     /**
      * Pushes the specified string onto the top of the stack.
      *
      * @param pushedString using pushedString
      */

     public void push(String pushedString) {
      // push the value onto the stack
             this.stackAsList.add(pushedString);
     }

     public String pop() {
         final String removedValue = this.array[this.array.length - 1];
         final String[] newArray = new String[this.array.length - 1];

         for (int counter = 0; counter < this.array.length - 1; counter++) {
             newArray[counter] = this.array[counter];
         }

         this.array = newArray;

         return removedValue;
     }

     /**
      * Returns a string representation of the stack.
      *
      * @return stackValues
      *
      */

     public String showStack() {
             // return the stack
             final StringBuilder stackValues = new StringBuilder();

             for (String value : this.stackAsList) {
                 stackValues.append(value).append(",");
             }

             if (stackValues.length() > 0) {
                 // Remove the trailing comma
                 stackValues.deleteCharAt(stackValues.length() - 1);
             }

             return stackValues.toString();
     }

}
