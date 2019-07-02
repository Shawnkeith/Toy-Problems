function zeroSum(arr){
  for(var i = 0; i < arr.length; i ++){
    for(var j = arr.length-1; j > 0; j--){
      var element1 = arr[i]
      var element2 = arr[j]
      if(element1 + element2 === 0){
        return true;
      }
    }
  }
  return false;
}

console.log(zeroSum([1, 3, 2, -3])) //true
console.log(zeroSum([5, 7, 2, 9])) //false
console.log(zeroSum([0, 1, 0, 1, 0])) //true
console.log(zeroSum([0])) //false
console.log(zeroSum([6, 7, 9, -4, 0, -5, -7])) //true