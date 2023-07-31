/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
   let stack = []

   let max = 0
   let counter = 0
   s.split("").forEach((element) => {
      if(element === "("){
         counter++
         max = Math.max(max, counter)
      } else if (element === ")"){
         counter--
      }
   })

   return max
};