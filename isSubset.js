

Array.prototype.isSubsetOf = function(arr){
  //make this work with .every and .includes
  
    let input = this
    const iterator = input.values();
    for (const value of iterator) {
    for(var i = 0; i < arr.length; i++){
      let element = arr[i]
      if( !arr.includes(iterator) ){
        return false
      }
      }
    }
    return true;
  };
  
  arr1 = ['cat', 'dog', 'cow']
  console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat'])) //true
  console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox'])) //false
  console.log(['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog'])) // true
  console.log([1, 'cat', 3].isSubsetOf([4, 3, 'cat', 1])) //true

