
//This function is working. Posted for future updates.

//function sortedSquares
//take an array
function sortedSquares(array){
// square each element in the array
var sortedArr = [];
for( let i = 0; i < array.length; i ++){
    sortedArr.push(Math.pow(array[i], 2))
}
//return each element sorted
return sortedArr.sort(function(a, b){return a-b});
}


console.log(sortedSquares([-4,-1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))


