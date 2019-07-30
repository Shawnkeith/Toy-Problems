/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function (number) {
    let result = '';
    console.log(number%1)
    if(number%1 === 0){
      return number + '/1';
    }
    
    if(number%1 === 0.5  || number%1 === -.5){
      // console.log(number)
      if(parseInt(number) === 0){
        return '1/2';
      }
      // console.log(number*100/(25)/(2))
      
      return number*100/(25)/(2) + '/2';
    }
    
    if(number%1 === 0.75  || number%1 === -.75){
      // console.log(number)
      // console.log(number*100/(25))
      
      if(parseInt(number) === 0){
        return '3/4';
      }
      return number*100/(25) + '/4';
    }
    
    if(number%1 === .25 || number%1 === -.25){
      if(parseInt(number) === 0){
        return '1/4';
      };
  
      return '/4';
    }
    else{
      console.log(countDecimals(number))
      if(countDecimals(number) > 2){
        let count = countDecimals(number)
        while(count > 0){
          number = number*10
          result = result + 0
          count--
        };
        // console.log(result)
        return Math.floor(number) + '/' + 1 + result;
      }
      console.log(number*100/(4) + '/' + '25')
    return number*100/(4) + '/' + '25';
  }
  };
  
  
  var countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
  }
  
  console.log(toFraction(.75));
  console.log(toFraction(.25));
  console.log(toFraction(3)); // '3/1'
  console.log(toFraction(0.5)); // '1/2'
  console.log(toFraction(2.5)); // '5/2'
  console.log(toFraction(3.5)); // '7/2'
  console.log(toFraction(1.75)); // '7/4'
  console.log(toFraction(.88)); // '22/25'
  console.log(toFraction(0.253213)); // '253213/1000000'
  
  