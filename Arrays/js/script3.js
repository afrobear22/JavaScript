var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log("vegetable:", vegetables);

fruits.shift();
console.log("fruit:", fruits);

console.log('fruit:', fruits[1]);

fruits.push(1);
console.log('fruit:', fruits);

console.log(vegetables.length);

vegetables.push(3);
console.log('vegetables:', vegetables);

var food = fruits.concat(vegetables);
console.log('food:', food);

var items =  food.splice(4,2,);
console.log('food:', food);