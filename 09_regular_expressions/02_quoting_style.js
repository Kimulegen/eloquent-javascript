/*
   * Imagine you have written a story and used single quotation marks
   * throughtout to mark pieces of dialogue. Now you want to replace all the
   * dialogue quotes with double quotes, while keeping the single quotes used in
   * contractions like aren't.
   *
   * Think of a pattern that distinguishes these two kinds of quote usage and craft
   * a call to the `replace` method that does the proper replacement
*/

/*********
*  MINE  *
**********/

// split into 3 groups
// the First is the beginning of the string
// the Second uses positive look behind for `'` that begins a word
// the Third uses positive look ahead for `'` that ends a word
const regexp = /(^')|(?<=\W)(')|(')(?=\W)/g

let text = "'I'm the cook,' he said, 'it's my job.'"
text.replace(regexp, '\"')
