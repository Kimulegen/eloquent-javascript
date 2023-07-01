/*
   * Make the `Group` class from the previous exercise iterable. Refer to the 
   * section about the iterator interface earlier in the chapter if you aren’t 
   * clear on the exact form of the interface anymore. 
   *
   * If you used an array to represent the group’s members, don’t just return 
   * the iterator created by calling the `Symbol.iterator` method on the array. 
   * That would work, but it defeats the purpose of this exercise. 
   *
   * It is okay if your iterator behaves strangely when the group is modified 
   * during iteration.
*/

// Iterator inside the Group class
class Group {
   constructor () {
      this.group = []
      this.i = 0
   }
   
   add(value) {
      if(this.group.includes(value)) return
     this.group.push(value)
   }
   delete(value) {
      let valIndex = this.group.indexOf(value)
      if (valIndex === -1) return

      this.group.splice(valIndex, 1)
   }
   has(value) {
            return this.group.indexOf(value) > -1
   }
   static from(iterObject) {
      const group = new Group()
      for (const item of iterObject) {
         group.add(item)
      }
      return group
   }

   [Symbol.iterator]() {
      let index=0
      const group = this.group
      return {
         next() {
            if (index === group.length) {
               return {done: true}
            } else {
               return {value: group[index++], done: false}
            }
         }
      }
   }
}

