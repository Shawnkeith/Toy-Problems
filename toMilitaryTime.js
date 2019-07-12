
//toMilitaryTime
//working but need to add colon

var toMilitary = function(string){
    let am = '';
    let pm = '';
    if(string.includes('a')){
      am = string.replace(/:\s*/g, "");
      am = parseInt(am)
      if(am >= 1200){
        am -= 1200;
        am = '00:0' + am;
        string = am.toString()
      }else{
        am = '0' + am; 
        string = am.toString();
        var min = string.split(2,-1)
        console.log(min)
      }
      
      console.log(string)
  
    }else if(string.includes('p')){
      pm = string.replace(/:\s*/g, "");
      pm = parseInt(pm)
      // console.log(pm)
      if(pm>= 1200 && pm<1300){
        pm = pm;
        string = pm.toString();
        string.split()
      }else{
        pm += 1200;
        string = pm.toString();
      }
    
      console.log(pm)
    }
  return string;
  }
  
  console.log(`Test1 expected ${toMilitary('12:00am')} to be 00:00`);
  console.log(`Test2 expected ${toMilitary('7:47pm')} to be 19:47`);
  console.log(`Test3 expected ${toMilitary('12:01am')} to be 00:01`);
  console.log(`Test4 expected ${toMilitary('9:15am')} to be 09:15`);
  console.log(`Test5 expected ${toMilitary('1:23am')} to be 01:23`);
  console.log(`Test6 expected ${toMilitary('3:00pm')} to be 15:00`);
  console.log(`Test7 expected ${toMilitary('12:00pm')} to be 12:00`);
  console.log(`Test8 expected ${toMilitary('04:00')} to be 04:00`);