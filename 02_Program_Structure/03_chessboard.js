/*
Write a program that creates a string that represents an 8x8 grid, using
newline chartacters to separate lines. At each position of the grid there is
either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

When you have a program that generatess this pattern,define a binding size = 8
and change the program so that it works for any size, outputting a grid of the
given width and height.
*/

const size = 8;
let board = "";
//while loop
let square = 1;
let file = 1;
while (square <= size * size) {
   square % 2 ^ !(file % 2) ? (board += "_") : (board += "#");
   if (!(square % size)) {
      board += "\n";
      file++;
   }
   square++;
}
console.log(board);

// for loop
for (let i = 1, file = 1; i <= size * size; i++) {
   i % 2 ^ !(file % 2) ? (board += "_") : (board += "#");

   if (!(i % size)) {
      board += "\n";
      file++;
   }
}
console.log(board);
