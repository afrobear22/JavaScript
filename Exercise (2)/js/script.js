
//+++++++++++++++++++++++++++++++++
// exercise 1 

var chess= "";
for(var i = 0; i < 8; i++){
    for(j = 0; j < 8; j++) {
        if((i + j)% 2 == 0) {
            chess += "■";
        } else {
            chess += "□";
        }
    }
    chess += "\n";
}
console.log(chess);




//+++++++++++++++++++++++++++++++++
// exercise 2 


var marTower = "";
var size = 10;

for(var i = 0; i < size; i++) {
    marTower = marTower + ("■");
    console.log(marTower)
};




//+++++++++++++++++++++++++++++++++
// exercise 3 


var arrayNum = [2,3,13,18,-5,38,-10,11,0,104];
var evens = [];
var odds = [];
  
for(var i = 0; i < arrayNum.length; i++){
    if(arrayNum[i] % 2 == 0){
      evens.push(arrayNum[i]);
    } else {
      odds.push(arrayNum[i]);
    }

    console.log(arrayNum[i]);
  }

  console.log("odds", odds, "evens", evens);
