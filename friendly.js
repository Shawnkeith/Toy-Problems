
// //given an array return only the friends names that have 4 characters

function friend(friends){
  var friendArr = [];
  for(var i = 0; i< friends.length; i++){
    if(friends[i].length === 4){
      friendArr.push(friends[i])
    }
  }

  return friendArr;
}


Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);