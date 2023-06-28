/*
Write a loop that makes seven calls to concole.log to output the following triangle:
#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .lenght after it
let abc = "abc";
console.log(abc.length); ==> 3
*/

// while loop
let segment = "#";
while (segment.length < 8) {
   console.log(segment);
   segment += "#";
}

// for loop
let section = "#";
for (let i = 0; i < 7; i++) {
   console.log(segment);
   segment += "#";
}
