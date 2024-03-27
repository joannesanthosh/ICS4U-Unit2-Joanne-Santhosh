/*
 * This program uses a basic class to make an array of integers
 *
 * @author  Joanne Santhosh
 * @version 1.0
 * @since   2024-03-08
 */

/**
 * * This is the program.
 * */
public class Main {
    /**
     * Adds string to an array
     *
     * @param array contains the array of strings
     */
     private String[] array = {};

     /**
      * Pushes the string to an array.
      *
      * @param string the string that is going to be pushed
      */
      public void push((final String[] args)); {
          final String[] newArray = new String[this.array.length + 1];

          for (int counter = 0; counter < this.array.length; counter++) {
              newArray[counter] = this.array[counter];
          }

          newArray[this.array.length] = string;
          this.array = newArray;
      }

      /**
       * Removes the last item of an array.
       *
       * @return the value that was removed
       */
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
       * Prints the array to the console.
       *
       * @return the values of the array formatted
       */
      public String showStack() {
          String stackValues = this.array[0];

          for (int counter = 1; counter < this.array.length; counter++) {
              stackValues = stackValues + ", " + this.array[counter];
          }

          return stackValues;
      }
}
