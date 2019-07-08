var moveZeros = function (arr) {
    // TODO: Program me
    let zeroArr = [];
    let notZero = [];
    for(let i = 0; i < arr.length; i++){
    //   console.log(arr)
      if(arr[i] !== 0){
          notZero.push(arr[i])
        // console.log(notZero)
      }else{
          zeroArr.push(arr[i])
        //   console.log(zeroArr)
      }
    }
    arr = [];
  return arr.concat(notZero, zeroArr);
  }

moveZeros([0,5,7,8,9,0,3,0,0,1,2]);