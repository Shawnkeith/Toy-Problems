// Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.
// Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas.
// Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on.
// How many pairs of iguanas will there be after `n` months?

// For example, the iguana pair size for months zero through five are:
// `0 1 1 2 3 5`
// If `n` were 4, your function should return 3; for 5, it should return 5.

// HINT: This iguana pattern is described exactly by the fibonacci sequence:

// [https://en.wikipedia.org/wiki/Fibonacci_number]

// Write a function that accepts a number `n` and returns the number of iguana pairs after `n` months.

// DO NOT use a recursive solution to this problem. Your solution must run in linear time.

// Write tests to make sure your code is working as expected.

var nthFibonacci = function(n){
    var top = 1;
    var seq = [0,1];
    let results = 0;
    if(n === 0){
        return 0;
    }

    if(n === 1 || n === 2){
        return top;
    }

    for(let i = 2; i <= n; i++){
     let next = seq[i-2] + seq[i-1];
     seq.push(next)   
    }
   results = seq.pop()
    return results;
}






console.log(nthFibonacci(0))
console.log(nthFibonacci(1))
console.log(nthFibonacci(2))
console.log(nthFibonacci(3))
console.log(nthFibonacci(4))
console.log(nthFibonacci(5))
console.log(nthFibonacci(12))