

//mergesort
//will split the array elements into individual arrays
//new individual arrays will be merged with the array beside it and compared/sorted
//repeate the previous step until each single array has been merged and sorted

var mergeSort = function(arr){
  var holdingArr = [];
  //loop through the array and make every index an individual array
  for(let i = 0; i < arr.length; i ++){
    console.log(arr[i])
    // holdingArr = arr.splice(arr[i])
  }
  console.log(holdingArr);
  //for each index merge then compare to the index +1
  //continue this for the length of the array 
}


const test1 = mergeSort([8,7,3,6,9,2,4,5,1]);
console.log(`Should sort a short array of integers: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test1)}`);

const test2 = mergeSort([8,7,3,3,9,2,4,5,1]);
console.log(`Should handle duplicates: expected [1,2,3,3,4,5,7,8,9] and got ${JSON.stringify(test2)}`);

const test3 = mergeSort([9,8,7,6,5,4,3,2,1]);
console.log(`Should handle reversely sorted array: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test3)}`);

const test4 = mergeSort([]);
console.log(`Should handle empty array: expected [] and got ${JSON.stringify(test4)}`);

const test5 = mergeSort([1]);
console.log(`Should handle array with single element: expected [1] and got ${JSON.stringify(test5)}`);

function createLargeArray() {
  var input = [];
  var sorted;
  var n = 100000;
  for (var i = 0; i < n; i++) {
    var number = Math.floor(Math.random() * n);
    input.push(number);
  }

  return input;
}

const arr = createLargeArray();
const test7 = arr.slice().sort((a, b) => a - b);
const test6 = mergeSort(arr);
console.log(`Should handle large array: ${JSON.stringify(test6) === JSON.stringify(test7)}`);