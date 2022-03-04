
//+++++++++++++++++++++++++++++++++
// domasno Calculator


const num1 = parseInt(prompt("Enter first number: "));

const operation = prompt("Enter one operation ( + , - , * or / ): ");

const num2 = parseInt(prompt("Enter second number: "));


let result;

switch(operation) {
    case "+":
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;

    case "-":
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;

    case "*":
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;

    case "/":
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;

    default:
        console.log('Not a valid operation');
        break;
};