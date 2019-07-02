var quickSort = function(arr){
  //choose starting element
  let startingElement = arr.length-1
  //create an array for holding values less that and greater than starting element
  let lessThan = [];
  let greaterThan = [];
  //loop through array
  if(arr.length === 0 || arr.length === 1){
    return arr;
  };
  for(let i =0; i < arr.length; i++){
    let currentElement = arr[i]
    if(currentElement < startingElement){
      //if index is less that starting element push into less than array
      lessThan.push(currentElement)
      // console.log(lessThan)
    }else if(currentElement > startingElement){
      //if index is greater than push into greater than array
      greaterThan.push(currentElement)
      // console.log(greaterThan)
    }
  }
  //recursively call function on each new array
  //concat the two arrays and the starting element
  return quickSort(lessThan).concat(startingElement, greaterThan)
}


const test1 = quickSort([8,7,3,6,9,2,4,5,1]);
console.log(`Should sort a short array of integers: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test1)}`);

const test2 = quickSort([8,7,3,3,9,2,4,5,1]);
console.log(`Should handle duplicates: expected [1,2,3,3,4,5,7,8,9] and got ${JSON.stringify(test2)}`);

const test3 = quickSort([9,8,7,6,5,4,3,2,1]);
console.log(`Should handle reversely sorted array: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test3)}`);

const test4 = quickSort([]);
console.log(`Should handle empty array: expected [] and got ${JSON.stringify(test4)}`);

const test5 = quickSort([1]);
console.log(`Should handle array with single element: expected [1] and got ${JSON.stringify(test5)}`);

