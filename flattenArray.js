function flatten(arr){
  var newArr = [];
  for(let i = 0; i < arr.length; i++){
      if(!Array.isArray(arr[i])){
      newArr.push(arr[i])
    }else if(Array.isArray(arr[i]) === true){
      newArr = newArr.concat(flatten(arr[i]))
      // flatten(arr[i]);
    }
  }
  return newArr;
}


console.log(flatten([[10],[20,30],[40]]))
console.log(flatten([1,2,[3],4,[5,[6],7]]))