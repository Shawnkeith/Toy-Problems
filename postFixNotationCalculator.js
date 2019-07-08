 var calculate = function(str) {
    var numArr = str.split(' ');
    let tempArr = []; 
    for(var i = 0; i < numArr.length; i++){
       let ele = numArr[i]
        if(Number(ele)){
            tempArr.push(ele)
        }else if(){
            
        }

    }
    console.log(tempArr)
    // eval(tempArr.join(' '))
    console.log(numArr);
};

console.log(`Test1: for input "1 5 8 * +", expected 41 and got ${calculate('1 5 8 * +')}`);
console.log(`Test2: for input "1 5 8 + *", expected 13 and got ${calculate('1 5 8 + *')}`);
console.log(`Test3: for input "100 2 / 25 +", expected 75 and got ${calculate('100 2 / 25 +')}`);
console.log(`Test4: for input ".5 .5 +", expected 1 and got ${calculate('.5 .5 +')}`);

// .map(function(item) {
//     return parseInt(item, 10);
// });