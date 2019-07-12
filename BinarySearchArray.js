// Given a sorted array of integers, find the index of a target value using a binary search algorithm.

// A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.


// Note:
// Your function should return -1 for target values not in the array. 

// Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?

// var binarySearch = function(arr, target){
//     let middle = arr[Math.round((arr.length-1) / 2)]
//     let result = [];
//     // console.log(arr)
//     if(target === middle){
//         return target;
//     }else if(target < middle){
//        results = arr.splice(0, arr.length/2)
//        binarySearch(result, target);
//         // console.log(result)
//         // console.log(arr)
//         // console.log(target)
//     }else if(target > middle){
//         result = arr.splice(arr.length/2, arr.length)
//         binarySearch(result, target);
//         // console.log(result)
//         // console.log(target)
//     }
//     return -1;
// }



var binarySearch = function(arr, target){
   //min index
    let min = 0;
    //max index
    let max = arr.length-1;
    //for the arr loop through
    while(min <= max){
        //set the middle point
        let middle = Math.floor((min + max) / 2)
        //if the middle point is equal to the target return
        if(arr[middle] === target){
            return middle;
            //if the target is greater than the middle add one to the min and continue to look through the arr
        }else if(target > arr[middle]){
            min = middle + 1;
            // if the target is less than the middle subtract one the continue the loop
        }else {
            max = middle - 1;
        }
    }
    //if you can not find the target in the arr return -1
    return -1;
}


console.log(`Test1: expected ${binarySearch([5], 4)} to be -1`);
console.log(`Test2: expected ${binarySearch([11, 12, 13, 14, 15], 11)} to be 0`);
console.log(`Test3: expected ${binarySearch([11, 12, 13, 14, 15], 12)} to be 1`);
console.log(`Test4: expected ${binarySearch([11, 12, 13, 14, 15], 13)} to be 2`);
console.log(`Test5: expected ${binarySearch([11, 12, 13, 14, 15], 14)} to be 3`);
console.log(`Test6: expected ${binarySearch([11, 12, 13, 14, 15], 15)} to be 4`);
console.log(`Test7: expected ${binarySearch([11, 12, 13, 14, 15], 16)} to be -1`);