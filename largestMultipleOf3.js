
/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


const largestProductOfThree = (array) => {
    // TODO: solution here
    const numberSorter = (a, b) => a - b;
    let result = 0;
    let sorted = array.sort(numberSorter);
    console.log(sorted.length)
     console.log(sorted)
     if(sorted.length === 3){
       result = sorted.reduce((a,b) => a*b);
      return result;
    }
    if(sorted.legnth === 1){
      return sorted[0];
    }
  
      for(let i = 0; i < sorted.length; i++){
     if(sorted.length === 2){
       var mult = sorted[i+1]
       console.log(mult)
       result = sorted[i] * mult
       return result;
     }   
      if(Math.sign(sorted[i]) === -1){
        let back = sorted.slice(-3);
        console.log(back)
        let front = sorted.slice(0,2)
        console.log(front)
        back = back.reduce( (a,b) => a * b );
        front = front.reduce( (a,b) => a * b );
        console.log(front)
        console.log(back)
        // console.log(sorted[i]);
        let lastEle = sorted.slice(-1)
        if(front * lastEle  > back){
          result = front * lastEle
          return result;
        }
        console.log(sorted[0] * sorted[1])
      }else{
        
        var last = array.slice(-3)
        result = last.reduce( (a,b) => a * b );
        console.log(last)
        return result;
      }
      
    }
    sorted = sorted.slice(-3)
    result = sorted.reduce( (a,b) => a * b );
    return result;
  };
  
  console.log(largestProductOfThree([ -6, -5, -4, -3, -2, -1 ]))
  console.log(largestProductOfThree([ -37,-31]))
  
  // console.log(largestProductOfThree([ -37, -31, -17, 29, 34, 41 ]))
  // console.log(largestProductOfThree([11,2,3,5,7]))