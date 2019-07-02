// //this code still needs work... 
// //need to update object name to equal actual value
// //obj value 0: 'a'
// // expected obj value 1 : 'a'

// //function should take one string value
// //based on the placement in the alphabet you will add the values of the character

function boggle(str){
      var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      var newObj = {};
      var results = []
      for (var i = 0; i< alpha.length; i++){
        var x=1
          if(alpha !== undefined){
            newObj[i] = alpha[i]
        }
      for(var key in newObj){
          if( newObj[key] === str[i]){
            results = Object.getOwnPropertyNames(newObj)
            results = results.map(Number)
            // results = results + x
            results = results.reduce((a , b) => (a+1) + (b), 0)
          }
      }
      } 
    
      return results
    }
    // console.log(boggle('abcde')) //15
    // console.log(boggle('zodiac')) //
    // console.log(boggle('chruschtschov')) //
    // console.log(boggle('strength')) //
    
    // Attempt #2
    
    function boggle(str){
      var alpha = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26}
      var results = []
      // console.log(Object.getOwnPropertyNames(alpha))
      // console.log(Object.values(alpha))
      // console.log(Object.keys(alpha))
      for (var i = 0; i< alpha.length; i++){
      for(var key in alpha){
          if(Object.getOwnPropertyNames(alpha) === str[i]){
            // console.log(alpha)
            results = Object.values(alpha)
            // console.log(results)
            results = results.reduce((a , b) => (a) + (b), 0)
            // console.log(results)
          }
      }
      } 
    
      return results
    }
    // console.log(boggle('abcde'))
    console.log(boggle('zodiac'))
    // console.log(boggle('chruschtschov'))
    // console.log(boggle('strength'))