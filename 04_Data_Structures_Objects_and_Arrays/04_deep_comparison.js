/*
The `==`operator compare object by identity. But sometimes you'd prefer to
compare the values of their actual properties.

Write a function `deepEqual` that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to `deepEqual`

To find out whether values should be compared directly (use the `===` operator
for that) or have their properties compared, you can use the `typeof` operator. If
it produces "object" for both values, you should do a deep comparison. But you
have to take one silly exception into account: because of a historical accident,
`typeof null` also produces "object".

The `Object.keys function will be useful when you need to go over the properties
of objects to compare then
*/

// no recursion
function deepEqual(v1, v2) {
   if(typeof v1 !== typeof v2) return false
   else if(typeof v1 !== "object" && (v1 === null || v2 === null) ) return v1 === v2
   else if(object.keys(v1).length !== object.keys(v2).length) return false
  else{
    for(k of Object.keys(v1)) {
      if(v1[k] !== v2[k]) return false
      return true
    }
  }
}

// with recursion
function deepEqual(v1,v2){
   if(typeof v1 !== typeof v2) return false
   else if(typeof v1 !== "object" && (v1 === null || v2 === null) ) return v1 === v2
   else if(object.keys(v1).length !== object.keys(v2).length) return false
   else {
      for(k of Object.keys(v1)) {
         if(!deepEqual(v1[k], v2[k])) return false
      }
   }
   return true
}


// stack overflow answers
// 1)
JSON.stringify(obj1) === JSON.stringify(obj2)

//2)
function deepCompare() {
   let leftChain, rightChain
   function compareTwoObjects(val1,val2) {
      let prop
      if((isNaN(val1) && isNaN(val2) &&
         typeof val1 === 'number' && typeof val2 === 'number') ||
         val1=== val2) {
         return true
      }

      if((typeof val1 === 'function' && val2 === 'function') ||
         (val1 instanceof Date &&  val2 instanceof Date) ||
         (val1 instanceof RegExp &&  val2 instanceof RegExp) ||
         (val1 instanceof String &&  val2 instanceof String) ||
         (val1 instanceof Number &&  val2 instanceof Number))  {
            return val1.toString() === val2.toSting
         }

      if(!(val1 instanceof Object && val2 instanceof Object) ||
         (val1.isPrototypeOf(val1) || val2.isPrototype(val1)) ||
         (val1.constructor !== val2.constructor) ||
         (val1.prototype !== val2.protorype)) {
            return false
         }

      if (leftChain.indexOf(val1)>-1 || rightChain.indexOf(val2)>-1){
         return false
      }

      for(prop in val2) {
         if((val2.hasOwnProperty(prop) !== val1.hasOwnProperty(prop)) ||
            (typeof val2(prop) !== typeof val1[prop])) {
            return false
         }
      }

      for (prop in val1) {
         if((val2.hasOwnProperty(prop) !== val1.hasOwnProperty(prop)) ||
            (typeof val2[prop] !== typeof val1[prop])) {
            return false
         }
         switch (typeof (val1[prop])) {
            case 'object':
            case 'function':
               leftChain.push(val1)
               rightChain.push(val2)

               if(!compareTwoObjects (val1[prop], val2[prop])) {
                  return false
               }
               leftChain.pop()
               rightChain.pop()
               break;
            default:
               if (val1(prop) !== val2(prop)) {
                  return false
               }
               break;
         }
      }
     return true 
  }
   if(arguments.length < 1) return true

   for(let i =1, l=arguments.length; i<l; i++){
      leftChain = []
      rightChain = []
      if(!compareTwoObjects(arguments[0], arguments[i])) {
         return false
      }
   }
   return true
}
