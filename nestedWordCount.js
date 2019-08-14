// Given an array of unique words, 
// find the word that contains the greatest number of other words. 
// A word must be at least two letters long.

function nestedWordCount(wordList) {
    // your code here!
    //create an obj to keep track of the words and the count of each word that it contains from the arr
    let comparison = {};
    //loop through the array
    for(let i = 0; i < wordList.length; i++){
        //to hold the count
        let count = 0;
        comparison[wordList[i]] = count;
        for (key in comparison){
            //check each key with each other. when it contains all the same values add 1 to count
            let check = wordList[i]
            if(key.includes(check)){
                comparison[key] += 1
            }
        }
    }
    console.log(comparison)
    let values = Object.values(comparison)
    let keys = Object.keys(comparison)
    console.log(values)
    console.log(keys)
    let i = values.indexOf(Math.max(...values))
    console.log(i);
    return keys[i];
};
  


// sample inputs for writing tests!:
  
  console.log(nestedWordCount(["gray", "grays", "ray", "rays", "strays"])) //grays
  console.log(nestedWordCount(["dis", "disintegrate", "disrated", "disrating", "rat", "rate", "rated", "rating"])) //disrated
  console.log(nestedWordCount(["ant", "anti", "antiparticle", "antiparty", "apart", "art", "arty", "disparted", "impart", "imparted", "interparticle", "interparty", "part", "parted", "party", "tip"]))
  console.log(nestedWordCount(["blue", "back", "up", "and", "going", "javascript", "much", "provides", "book", "series", "new", "many", "complete", "background", "years", "necessary", "those", "limited", "sufficiently", "easy", "toward", "mechanisms", "operators", "function", "types", "including", "first", "sufficiently", "easy", "books", "overview", "unicorn", "bear", "bee", "box", "cat", "gorilla", "giant", "gear", "goal", "home", "ache", "fantastic", "exuberant", "ice", "hollow", "happy", "healthy", "homily", "cold", "hot", "yellow", "orange", "green", "complacent", "super", "monster", "bull", "horse", "pig", "another", "one", "to", "test", "you", "guys", "out", "how", "like", "me", "now", "son"]))