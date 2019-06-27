// //this code still needs work... 
// //need to update object name to equal actual value
// //obj value 0: 'a'
// // expected obj value 1 : 'a'

// //function should take one string value
// //based on the placement in the alphabet you will add the values of the character

// function boggle(str){
//   var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   var newObj = {};
//   var results = []
//   for (var i = 0; i< alpha.length; i++){
//     var x=1
//       if(alpha !== undefined){
//         newObj[i] = alpha[i]
//     }
//   for(var key in newObj){
//       if( newObj[key] === str[i]){
//         results = Object.getOwnPropertyNames(newObj)
//         results = results.map(Number)
//         // results = results + x
//         results = results.reduce((a , b) => (a+1) + (b), 0)
//       }
//   }
//   } 

//   return results
// }
// // console.log(boggle('abcde')) //15
// // console.log(boggle('zodiac')) //
// // console.log(boggle('chruschtschov')) //
// // console.log(boggle('strength')) //

// // Attempt #2

// function boggle(str){
//   var alpha = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26}
//   var results = []
//   // console.log(Object.getOwnPropertyNames(alpha))
//   // console.log(Object.values(alpha))
//   // console.log(Object.keys(alpha))
//   for (var i = 0; i< alpha.length; i++){
//   for(var key in alpha){
//       if(Object.getOwnPropertyNames(alpha) === str[i]){
//         // console.log(alpha)
//         results = Object.values(alpha)
//         // console.log(results)
//         results = results.reduce((a , b) => (a) + (b), 0)
//         // console.log(results)
//       }
//   }
//   } 

//   return results
// }
// // console.log(boggle('abcde'))
// console.log(boggle('zodiac'))
// // console.log(boggle('chruschtschov'))
// // console.log(boggle('strength'))


// //This function is working. Posted for future updates.

// //function sortedSquares
// //take an array
// function sortedSquares(array){
// // square each element in the array
// var sortedArr = [];
// for( let i = 0; i < array.length; i ++){
//     sortedArr.push(Math.pow(array[i], 2))
// }
// //return each element sorted
// return sortedArr.sort(function(a, b){return a-b});
// }


// console.log(sortedSquares([-4,-1, 0, 3, 10]))
// console.log(sortedSquares([-7, -3, 2, 3, 11]))



// //given an array return only the friends names that have 4 characters

// function friend(friends){
//   var friendArr = [];
//   for(var i = 0; i< friends.length; i++){
//     if(friends[i].length === 4){
//       friendArr.push(friends[i])
//     }
//   }

//   return friendArr;
// }


// Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
// Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
// Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
// Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);




// //given two strings the function will take the first input and search for those characters in the second input. 
// //with each occupance the count will increase by 1

// function numJewelsInStones(str, test){
//   totalCount = 0
//   for(var i = 0; i < test.length; i++){
//     var element = test[i]
//     // console.log(element)
//     // console.log(test[i])
//     if(str.includes(element)){
//       totalCount++
//     }
//   }

//   return totalCount;
// }


// console.log(numJewelsInStones('aA', 'aAAbbb')) //3
// console.log(numJewelsInStones('z', 'ZZ')) //0
// console.log(numJewelsInStones('bZw', 'BbzZZwW')) //4
// console.log(numJewelsInStones('qrsTuv', 'qQQrRRttUv')) //3




// function zeroSum(arr){
//   for(var i = 0; i < arr.length; i ++){
//     for(var j = arr.length-1; j > 0; j--){
//       var element1 = arr[i]
//       var element2 = arr[j]
//       if(element1 + element2 === 0){
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(zeroSum([1, 3, 2, -3])) //true
// console.log(zeroSum([5, 7, 2, 9])) //false
// console.log(zeroSum([0, 1, 0, 1, 0])) //true
// console.log(zeroSum([0])) //false
// console.log(zeroSum([6, 7, 9, -4, 0, -5, -7])) //true




// function flatten(arr){
//   var newArr = [];
//   for(let i = 0; i < arr.length; i++){
//       if(!Array.isArray(arr[i])){
//       newArr.push(arr[i])
//     }else if(Array.isArray(arr[i]) === true){
//       newArr = newArr.concat(flatten(arr[i]))
//       // flatten(arr[i]);
//     }
//   }
//   return newArr;
// }


// console.log(flatten([[10],[20,30],[40]]))
// console.log(flatten([1,2,[3],4,[5,[6],7]]))



// //In this toy problem we had to create a stack and a queue. Then use the stack function as the input for the queue.

// //create a stack
// var Stack = function(){
//   this['storage'] = {};
//   this.count = 0
// };

// Stack.prototype.push = function(value){
//   this.storage[this.count] = value;
//   this.count++;
// };

// Stack.prototype.pop = function(){
//   this.count--;
//   var string = this.storage[this.count];
//   delete this.storage[this.count]
//   return string;
// };

// Stack.prototype.size = function(){
//   if (this.count < 0) {
//     return 0;
//   }
//   return this.count;
// };

// // var stack1 = new Stack()
// // console.log(stack1)
// // var stack2 = new Stack()
// // console.log(stack2)

// //create a queue 
// var Queue = function(){
//   this['results'] = {};
//   this.stack1 = new Stack();
//   this.stack2 = new Stack();
// }


// Queue.prototype.enqueue = function(value){
//   this.results[this.stack1] = value;
//   this.stack1++;
// }

// Queue.prototype.dequeue = function(){
//   var string = this.results[this.stack2];
//   delete this.results[this.stack2];
//   this.stack2++;
//   return string;
// }

// Queue.prototype.size = function(){
//   if (this.stack2 > this.stack1 || this.stack1 === 0) {
//     return 0;
//   }
//   return this.stack1 - this.stack2;
// }
// //stacks will be the input and output for the queue
// var queue = new Queue(new Stack())
// console.log(queue)
// var queue2 = new Queue(new Stack())
// console.log(queue2)




// Array.prototype.isSubsetOf = function(arr){
//   //make this work with .every and .includes
  
//     // let input = this
//     // const iterator = input.values();
//     // for (const value of iterator) {
//     // for(var i = 0; i < arr.length; i++){
//     //   let element = arr[i]
//     //   if( !arr.includes(iterator) ){
//     //     return false
//     //   }
//     //   }
//     // }
//     // return true;
//   };
  
//   // arr1 = ['cat', 'dog', 'cow']
//   console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat'])) //true
//   console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox'])) //false
//   console.log(['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog'])) // true
//   console.log([1, 'cat', 3].isSubsetOf([4, 3, 'cat', 1])) //true






  // var Tree = function(value){
  //   this.value = value;
  //   this.children = [];
  // };
  
  // Tree.prototype.countLeaves = function() {
  //   var count = 0;
  //   if(this.children.length === 0){
  //     count++
  //   } else if(this.children){
  //       for(var i = 0; i < this.children.length; i++){
  //         var element = this.children[i]
  //         count += element.countLeaves();
  //       }
  //     }
  //   return count;
  // };
  
  
  /**
    * You shouldn't need to change anything below here, but feel free to look.
    */
  
  /**
    * add an immediate child
    * (wrap values in Tree nodes if they're not already)
    */
  // Tree.prototype.addChild = function(child){
  //   if (!child || !(child instanceof Tree)){
  //     child = new Tree(child);
  //   }
  
  //   if(!this.isDescendant(child)){
  //     this.children.push(child);
  //   }else {
  //     throw new Error("That child is already a child of this tree");
  //   }
  //   // return the new child node for convenience
  //   return child;
  // };
  
  // /**
  //   * check to see if the provided tree is already a child of this
  //   * tree __or any of its sub trees__
  //   */
  // Tree.prototype.isDescendant = function(child){
  //   if(this.children.indexOf(child) !== -1){
  //     // `child` is an immediate child of this tree
  //     return true;
  //   }else{
  //     for(var i = 0; i < this.children.length; i++){
  //       if(this.children[i].isDescendant(child)){
  //         // `child` is descendant of this tree
  //         return true;
  //       }
  //     }
  //     return false;
  //   }
  // };
  
  // /**
  //   * remove an immediate child
  //   */
  // Tree.prototype.removeChild = function(child){
  //   var index = this.children.indexOf(child);
  //   if(index !== -1){
  //     // remove the child
  //     this.children.splice(index,1);
  //   }else{
  //     throw new Error("That node is not an immediate child of this tree");
  //   }
  // };
  
  // var root = new Tree(); 
  // console.log(root.countLeaves()); // 1 
  // root.addChild(new Tree()); 
  // // console.log(root.countLeaves()); // still 1 
  // root.addChild(new Tree()); 
  // root.children[0].addChild(new Tree()); 
  // root.children[0].addChild(new Tree()); 
  // root.children[0].children[0].addChild(new Tree()); 
  // console.log(root.countLeaves()); // 3```
  // // console.log(root)




  
  
  
//   var Tree = function(value){
//     this.value = value;
//     this.children = [];
//   };
  
// Tree.prototype.map = function(callback){
//   let results = new Tree(callback(this.value))
//   console.log(this.children)
//   this.children.forEach()
//     for(var i = 0; i < this.children.length; i++){
//       var element = this.children[i]
//       results.children = this.addChild(this.children.map(callback))
//       // console.log(callback(element.value))
//       // results.children.value = (callback(element.value))
//       }
//   return results
// }

//   Tree.prototype.addChild = function(child){
//     if (!child || !(child instanceof Tree)){
//       child = new Tree(child);
//     }
  
//     if(!this.isDescendant(child)){
//       this.children.push(child);
//     }else {
//       throw new Error("That child is already a child of this tree");
//     }
//     // return the new child node for convenience
//     return child;
//   };
  
//   /**
//     * check to see if the provided tree is already a child of this
//     * tree __or any of its sub trees__
//     */
//   Tree.prototype.isDescendant = function(child){
//     if(this.children.indexOf(child) !== -1){
//       // `child` is an immediate child of this tree
//       return true;
//     }else{
//       for(var i = 0; i < this.children.length; i++){
//         if(this.children[i].isDescendant(child)){
//           // `child` is descendant of this tree
//           return true;
//         }
//       }
//       return false;
//     }
//   };
  
//   /**
//     * remove an immediate child
//     */
//   Tree.prototype.removeChild = function(child){
//     var index = this.children.indexOf(child);
//     if(index !== -1){
//       // remove the child
//       this.children.splice(index,1);
//     }else{
//       throw new Error("That node is not an immediate child of this tree");
//     }
//   };


//   var double = function (value) { return value * 2; };
//   // create a tree with some values, and a tree with our *expected* output
//   // depth: 0
// var input = new Tree(1);
// var output = new Tree(2);
// // depth: 1
// input.addChild(2);
// input.addChild(3);
// // expected values
// output.addChild(4);
// output.addChild(6);
// // depth: 2
// input.children[0].addChild(4);
// input.children[0].addChild(5);
// input.children[1].addChild(6);
// input.children[1].addChild(8);
// // expected values
// output.children[0].addChild(8);
// output.children[0].addChild(10);
// output.children[1].addChild(12);
// output.children[1].addChild(16);
// // depth: 3 (sparse)
// input.children[0].children[0].addChild(9);
// input.children[1].children[1].addChild(10);
// // expected values
// output.children[0].children[0].addChild(18);
// output.children[1].children[1].addChild(20);

// var result = input.map(double);
// console.log('input:', input);
// console.log('output:', output);
// console.log('Your result:', result);





// A resource on breadth first tree traversal
// https://www.cs.bu.edu/teaching/c/tree/breadth-first/

// You have a Queue constructor to help implement BFSelect

// 





// INSTRUCTIONS 
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values 'bubble' to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript's built-in sorting function (Array.prototype.sort).

// var bubbleSort = function(array) {
//   var redo = false
//   for(let i = 0; i < array.length; i++){
//     if(array[i] > array[i+1]){
//       console.log(array)
//       array[i], array[i+1] = array[i+1], array[i]
//       redo = true
//     }
//   }
//   if(redo === true){
//     bubbleSort(array);
//   }
//   console.log(array)
//   return array;
// };


// ////////////////////* TEST CASES *////////////////////

// Array.prototype.sort = null;
// var input = [20, -10, -10, 2, 4, 299];
// var expected1 = [-10, -10, 2, 4, 20, 299].toString();
// var actual1 = bubbleSort(input).toString();
// console.log(`Test1 result: ${expected1 === actual1}; Expected ${expected1} and got ${actual1}`)

// //////////////////////////////////////////////////////

// Array.prototype.sort = null;
// var input = [2, 2, 2, 2, 2, 22, 2, 2, 222, 2222, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22];
// var expected2 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 22, 22, 222, 2222].toString();
// var actual2 = bubbleSort(input).toString();
// console.log(`Test2 result: ${expected2 === actual2}; Expected ${expected2} and got ${actual2}`)

// //////////////////////////////////////////////////////

// Array.prototype.sort = null;
// var input = [18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36];
// var expected3 = [18, 19, 20, 24, 24, 25, 26, 28, 29, 30, 30, 31, 35, 36, 36, 40].toString();
// var actual3 = bubbleSort(input).toString();
// console.log(`Test3 result: ${expected3 === actual3}; Expected ${expected3} and got ${actual3}`)



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


// function insertionSort (array) {
//   for(let i =1; i<array.length; i++){
//     for(let j =i; j > -1; j--){
//       if(array[j].value && array[i].value && array[i].value < array[i+1].value){
//           if(array[i+1].value < array[j].value){
//             array[j].value, array[i+1].value = array[i+1].value, array[j].value
//           }
//         }
//     }
//   }
//   return array;
// };


// const test1 = insertionSort([ { "value": 3 }, { "value": 1 }, { "value": 2 } ]);
// console.log(`Test1: expected [ { "value": 1 }, { "value": 2 }, { "value": 3 } ] and got ${JSON.stringify(test1)}`);
// const test2 = insertionSort([ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ]);
// console.log(`Test2: expected [ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ] and got ${JSON.stringify(test2)}`);


// var quickSort = function(arr){
//   //choose starting element
//   let startingElement = arr.length-1
//   //create an array for holding values less that and greater than starting element
//   let lessThan = [];
//   let greaterThan = [];
//   //loop through array
//   if(arr.length === 0 || arr.length === 1){
//     return arr;
//   };
//   for(let i =0; i < arr.length; i++){
//     let currentElement = arr[i]
//     if(currentElement < startingElement){
//       //if index is less that starting element push into less than array
//       lessThan.push(currentElement)
//       // console.log(lessThan)
//     }else if(currentElement > startingElement){
//       //if index is greater than push into greater than array
//       greaterThan.push(currentElement)
//       // console.log(greaterThan)
//     }
//   }
//   //recursively call function on each new array
//   //concat the two arrays and the starting element
//   return quickSort(lessThan).concat(startingElement, greaterThan)
// }


// const test1 = quickSort([8,7,3,6,9,2,4,5,1]);
// console.log(`Should sort a short array of integers: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test1)}`);

// const test2 = quickSort([8,7,3,3,9,2,4,5,1]);
// console.log(`Should handle duplicates: expected [1,2,3,3,4,5,7,8,9] and got ${JSON.stringify(test2)}`);

// const test3 = quickSort([9,8,7,6,5,4,3,2,1]);
// console.log(`Should handle reversely sorted array: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test3)}`);

// const test4 = quickSort([]);
// console.log(`Should handle empty array: expected [] and got ${JSON.stringify(test4)}`);

// const test5 = quickSort([1]);
// console.log(`Should handle array with single element: expected [1] and got ${JSON.stringify(test5)}`);



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