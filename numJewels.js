
// //given two strings the function will take the first input and search for those characters in the second input. 
// //with each occupance the count will increase by 1

function numJewelsInStones(str, test){
  totalCount = 0
  for(var i = 0; i < test.length; i++){
    var element = test[i]
    // console.log(element)
    // console.log(test[i])
    if(str.includes(element)){
      totalCount++
    }
  }

  return totalCount;
}


console.log(numJewelsInStones('aA', 'aAAbbb')) //3
console.log(numJewelsInStones('z', 'ZZ')) //0
console.log(numJewelsInStones('bZw', 'BbzZZwW')) //4
console.log(numJewelsInStones('qrsTuv', 'qQQrRRttUv')) //3