/*Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/
function findOdd(A) {
    let obj = {};
    for (let i = 0; i < A.length; i++) {
        // console.log(obj.hasOwnProperty(A[i]))
        if (!obj.hasOwnProperty(A[i])) {
            obj[A[i]] = 1;
        } else if (obj.hasOwnProperty(A[i])) {
            obj[A[i]] = obj[A[i]] + 1;
        }
    }
    for (key in obj) {
        console.log(obj[key])
        if (obj[key] % 2 === 1) {
            return Number(key);
        }
    }
    return 0;
}
console.log(findOdd([1, 1, 2, 3, 3, 5, 5]))
    // console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5));
    // console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1));
    // console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5));
    // console.log(findOdd([10], 10));
    // console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10));
    // console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1));
    // console.log(3 % 2)f


//Another solution

function findOdd(A) {
    for (var i = 0; i < A.length; i++) {
        //Query the number of times that this 'i' element appears
        //then verify if that number of times is odd. If it is true, then return
        //that 'i' element
        if ((A.filter(function(item) { return item == A[i]; })).length % 2 != 0) {
            return A[i];
        }
    }
    return 0;
}