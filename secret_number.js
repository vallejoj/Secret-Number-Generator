'use strict';
// module.exports = function() {
//   var secretNumber=Math.floor((Math.random() * 1000000) + 1);
//   return function(){
//     return secretNumber;
// }
// };

module.exports= function(){

  var rando=Math.floor((Math.random() * 1000000) + 1)
  var newNumber= rando;
  return function(){
    return newNumber;
    }

  }
