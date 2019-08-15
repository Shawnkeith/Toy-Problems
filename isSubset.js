

Array.prototype.isSubsetOf = function(arr){
  //make this work with .every and .includes
  let trueFalse = [];
  for (let i = 0; i < this.length; i++){
    trueFalse.push(arr.includes(this[i]))
  }
  console.log(trueFalse)
    if(!trueFalse.includes(false)){
      return true;
    }
    return false;
  };
  
  arr1 = ['cat', 'dog', 'cow']
  console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat'])) //true
  console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox'])) //false
  console.log(['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog'])) // true
  console.log([1, 'cat', 3].isSubsetOf([4, 3, 'cat', 1])) //true

