var allAnagrams = function(str){
    //array to hold each anagram
    let results = [];
    var solutions = (str.length-1) * (str.length)
    console.log(solutions)
    //loop through the entire string
    for(let i = 0; i < str.length; i++){
        let count = 0;
        let tupil = [];
        tupil.push(str[i])
        count++
        while(count < str.length-1){
            tupil.push(str[i])
            count++
        }
        
        console.log(tupil)
        for(let j = 0; j < tupil.length; j++){
            let ele = tupil[j] 
            // if()
            console.log(tupil[j])
            
            
            
        }
    }
        // results = (tupil.shift())
        // results += tupil.pop()
        
    }


console.log(allAnagrams('abc'))
console.log(allAnagrams('abcd'))
console.log(allAnagrams('abcdef'))
console.log(allAnagrams('lint'))