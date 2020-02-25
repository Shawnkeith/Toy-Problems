/*Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.*/

snail = function(array) {
    let results = [];
    for(let i = 0; i < array.length; i ++){
        for(let j = 0; i < array[i].length; j++){
            while( i === 0){
                results.push(array[i][j]);
            }
        }
    }
    console.log(results);
    return results;
    // enjoy
  };

console.log(snail([[]])); //[]
console.log(snail([[1]])); //[1]
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); //[1,2,3,6,9,8,7,4,5]
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));