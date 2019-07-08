var longestRun = function(str){
    //create a count var for the run
    let count = 0
    //create var to keep track of first index of the letter
    let firstIndex = 0
    let lastIndex = 0
    //loop through the string
    let obj = {};
    if(str.length === 0){
        return [firstIndex, lastIndex];
    }
    for(let i = 0; i < str.length; i ++){
        let ele = str[i];
        if(!obj.hasOwnProperty(ele)){
            obj[ele] = 1;
        }else if(obj.hasOwnProperty(ele)){
            obj[ele]++
        }
    }
    let largest = Math.max.apply(Math, Object.values(obj));
    if(largest === 1){
        return [firstIndex, lastIndex];
    } else{
        console.log(largest)
        console.log(Object.values(obj))
        console.log(str.indexOf())
    }
};

console.log(longestRun('abbbcc'))
console.log(longestRun('aabbc'))
console.log(longestRun(''))
console.log(longestRun('abcdefg'))