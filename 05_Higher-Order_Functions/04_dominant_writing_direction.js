/*
   * Write a function that computes the dominant writing direction in a string of
   * text. Remember that each script ovject has a `direcion` property that can be
   * "ltr" (left to right), "rtl" (right to left), o "ttb" (top to bottom).
   *
   * The dominant direction is the direction of a majority of the characters that
   * have a script associated with them. The `characterScript` and `countBy`
   * function defined earlier in the chapter are probably useful here.
*/
/*
   * {
      * name: "Coptic",
      * ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
      * direction: "ltr",
      * year: -200,
      * living: false,
      * link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
      * }
*/

// mine
function dominantDirection(text) {
   // agrupa los caracteres por direccion del script
   let scripts = countBy(text, (char) => {
      // el caracter, segun su identificador, se tranforma en
      // el objeto script, luego se retorn SOLO la DIRECCION
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
  });

   // sacar el maximo conteo del array creado por countBy
   // la forma de los objetos pasado es {name: X, count: Y}
   // luego se filtra por la direccion con mayor conteo
   let highestCount = Math.max(...scripts.map(script => script.count))
   let [highestDirection] = scripts.filter(scr => scr.count === highestCount)
   return highestDirection.name

}  

//mine but more refined
function dominantDirection(str) {
  let textByDirection = countBy(str, (char) => {
   	let script = characterScript(char.codePointAt(0));
   	return script ? script.direction : "none";
  });
  
  let highestDirCount =textByDirection.reduce((acc,cv) => {
    let highest = acc
    if(cv.count > acc.count) highest = cv
    return highest
  }, {name: 'none', count:0})
  
  return highestDirCount.name
}


// helper functions
function characterScript (code) {
   for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
         return code >= from && code < to
      })) {
         return script
      }
   }
   return null
}

function countBy(items, groupName) {
   let counts = []
   for (let item of items) {
      let name = groupName(item)
      let known = counts.findIndex(c => c.name == name)
      if(known == -1){
         counts.pudh({name, count: 1})
      } else {
         counts[known].count++
      }
   }
}
