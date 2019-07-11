var isPalindrome = function(str){
    let reverse = str.toLowerCase().split('').reverse().join('');
    
    return reverse === str;
};


function longestPalindrome (str) {
    let string = str.toLowerCase()
    palindromeArr = [];
    for ( let i = 0; i < string.length; i++ ){
        let word = string.slice(i)
        if(isPalindrome(word) === true)
        console.log(string)
    }
return string;
};
  
  
  
  console.log(`Test1: expected "aibohphobia" and got "${longestPalindrome('aibohphobia')}"`);
  console.log(`Test2: expected " redivider " and got "${longestPalindrome('aaaa level eye redivider hannah')}"`);
  console.log(`Test3: expected "racecar" and got "${longestPalindrome('This palindrome occurs in the last half of the string racecar')}"`);
  console.log(`Test4: expected "tattarrattat" and got "${longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg')}"`);
  console.log(`Test5: expected "a racecar a" and got "${longestPalindrome('My dad is a racecar athlete')}"`);