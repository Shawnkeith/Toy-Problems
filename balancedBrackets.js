var isBalanced = function(str){
    let stack = [];
    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
   
    // let openArr = [];
    // let closedArr = [];
    // if( str[0] === ')' || str[0] === '}' || str[0] === ']' ){
    //     return false;
    // }
    // for( let i = 0; i < str.length; i++ ){
    //     if(str[i] === '(' || str[i] === '{'  || str[i] === '[' ){
    //         openArr.push(str[i])
    //         // console.log(arr)
    //     }else if( str[i] === ')' || str[i] === '}'  || str[i] === ']'){
    //         closedArr.push(str[i])
    //     }
    // }
    // if(closedArr.length !== openArr.length){
    //     return false;
    // }
    // for(let j = 0; j < openArr.length; j++){
    //     if ( openArr[j] === '('  && closedArr[j] === ')' ){
    //         openArr.pop(openArr[j])
    //         closedArr.pop(closedArr[j])
    //     }
    //     if ( openArr[j] === '['  && closedArr[j] === ']' ){
    //         openArr.pop(openArr[j])
    //         closedArr.pop(closedArr[j])
    //     }
    //     if ( openArr[j] === '{'  && closedArr[j] === '}' ){
    //         openArr.pop(openArr[j])
    //         closedArr.pop(closedArr[j])
    //     }
    // }
        
    //     console.log(openArr)
    //     console.log(closedArr)
    // return openArr.length === 0 && closedArr.length === 0;
};

console.log(`Test1: expected false and got ${isBalanced(')(')}`);
console.log(`Test2: expected false and got ${isBalanced('()(()()()())((()(()()))')}`);
console.log(`Test3: expected true and got ${isBalanced('[[[{{{((()))}}}]]]')}`);
console.log(`Test4: expected true and got ${isBalanced('(((10 ) ()) ((?)(:)))')}`);
console.log(`Test5: expected true and got ${isBalanced('(x + y) - (4)')}`);
console.log(`Test6: expected false and got ${isBalanced('({)}')}`);
console.log(`Test7: expected false and got ${isBalanced('[]]')}`);
console.log(`Test8: expected false and got ${isBalanced('(50)(')}`);
console.log(`Test9: expected true and got ${isBalanced('{}')}`);
console.log(`Test10: expected false and got ${isBalanced('{')}`);
console.log(`Test11: expected false and got ${isBalanced('[]}{()')}`);
console.log(`Test12: expected false and got ${isBalanced(')))()(((')}`);
console.log(`Test13: expected false and got ${isBalanced('}')}`);
console.log(`Test14: expected true and got ${isBalanced('[{()}]')}`);
console.log(`Test15: expected false and got ${isBalanced('[{]}')}`);
console.log(`Test16: expected true and got ${isBalanced('[{}]')}`);