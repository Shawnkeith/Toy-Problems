
// Insertion sort is a basic sorting algorithm.

// Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). It does this until it gets to the end of the array.

// Insertion sort should be implemented as a stable sort. This means that equal elements
// should retain their relative order. Numbers, as primitives, give us no way to check this,
// so we’ll be sorting objects with a value field, on which they will be sorted, like so:

// [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]
// A stable sort must return

// [{value: 5, order: 1}, {value: 5, order: 2}, {value: 10}]
// in that order.

// DO NOT USE Array.sort() method


function insertionSort (array) {
  for(let i =1; i<array.length; i++){
    for(let j =i; j > -1; j--){
      console.log(array[j])
      if(array[j].value && array[i].value && array[i].value < array[i+1].value){
          if(array[i+1].value < array[j].value){
            array[j].value, array[i+1].value = array[i+1].value, array[j].value
          }
        }
    }
  }
  return array;
};


const test1 = insertionSort([ { "value": 3 }, { "value": 1 }, { "value": 2 } ]);
console.log(`Test1: expected [ { "value": 1 }, { "value": 2 }, { "value": 3 } ] and got ${JSON.stringify(test1)}`);
const test2 = insertionSort([ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ]);
console.log(`Test2: expected [ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ] and got ${JSON.stringify(test2)}`);


