// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return “null” on invalid input.

// You can use this DIGIT_VALUES object to help you!


var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

function romanNumeral(str) {
    let keys = Object.keys(DIGIT_VALUES);
    let values = Object.values(DIGIT_VALUES);
    let arr = [];
    let results = 0;
    if(!str.length){
        return 0;
    };
    for(let i = 0; i < str.length; i ++){
        let ele = str[i];
        if(ele === keys[0] ){
            ele = values[0]
        } else if(ele === keys[1]){
            ele = values[1]
        }else if(ele === keys[2]){
            ele = values[2]
        }else if(ele === keys[3]){
            ele = values[3]
            console.log(ele)
        }else if(ele === keys[4]){
            ele = values[4]
        }else if(ele === keys[5]){
            ele = values[5]
        }else if(ele === keys[6]){
            ele = values[6]
        }
        if(!Number(ele)){
            return null;
        }
        arr.push(ele)
        
    }
    // need to change the way i am adding the characters
    // must only add characters that have the same length 1000 + 1000; 100 + 100; 10 + 10 + 10; this would equal 2230;
    // then after comparing all same length numbers add the remaning numbers together
    for (let j = 0; j < arr.length; j++){
        console.log(arr)
        let num1 = arr[j]
        let num2 = arr[j+1]
        if(num2 !== undefined){
            if(num1 > num2){
                num1 += num2
                arr.pop()
                arr.pop()
            }else if(num1 < num2){
                num1 = num2 - num1;
                arr.pop()
                arr.pop()
            } else if(num1 === num2){
                num1 = num1 + num2
                arr.pop()
                arr.pop()
            }
        } 
        results += num1;
         if(num2 === undefined){
            console.log(num1)
            console.log(results)
        }
    }   
    return results;
}



// Examples: 
console.log(romanNumeral("LX")) // => 60
console.log(romanNumeral("IV")) // => 4
console.log(romanNumeral("horse")) // => 'null'
console.log(romanNumeral("")) // => 0
