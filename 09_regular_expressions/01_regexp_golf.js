/*
   * *Code golf* is a term used for the game of trying to express a particular
   * program in as few characters as possible. Similarly, *regexp golf* is the practice
   * of writing as tiny a regular expression as possible to match a given pattern,
   * and *only* that pattern.
   *
   * For each of the following items, write a regular expressio to test whether
   * any of the given substrings occur in a string. The regular expression should 
   * match only strings containing one of the substrings described. Do not worry
   * about word boundaries unless explicitly mentioned. When your expression 
   * works, see whether you can make it any smaller.
   *
   * 1. *car* and *cat*
   * 2. *pop* and *prop*
   * 3. *ferret*, *ferry*, and *ferrari*
   * 4. Any word ending in *ious*
   * 5. A whitespace character followed by a period, comma, colon, or semicolon
   * 6. A word longer than six letters
   * 7. A word without the letter *e* (or *E*)
   *
   * Refer to the table in the chapter summary for help. Test each solution with
   * a few test strings.
*/

// TEST FUNCTION
function verify(regexp, yes, no) { 
   //Ignore unfinished exercises if (regexp.source == "...") return;
   for (let str of yes) if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
   }
   for (let str of no) if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
   }
}

/*********
*  MINE  *
**********/  
// 1
const s1 = new RegExp(/ca[tr]/)

// 2
const s2 = new RegExp(/pr?op/)

// 3 
const s3 = new RegExp(/ferr[eya].*\b/)

// 4
const s4 = new RegExp(/\b\w+ious\b/)

// 5
const s5 = new RegExp(/\s[.,:;]/)

// 6
const s6 = new RegExp(/\b\w{6,}\b/)

// 7
const s7 = new RegExp(/\b[^eE\s]+\b/)


/*********
*  BOOK  *
**********/  
s1 = /ca[rt]/
s2 = /pr?op/
s3 = /ferr(et|y|ari)/
s4 = /ious\b/
s5 = /s[.,:;]/
s6 = /\w{7}/
s7 = /\b[^\We]+\b/i
