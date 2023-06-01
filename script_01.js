
// let arr;
// arr = new Array();
// arr = [];
// arr = [2,3,4,5];

// output(arr.length - 1);

// function output(outputStr)
// {
//     console.log(outputStr);
// }


// var struc =
// {
//  level1:
//  {
//     level2:
//     {
//     param1: 3.14,
//     param2: 10.01
//     }
// }
// };
// console.log(struc.level1.level2.param1)
// console.log(struc.level1.level2.param2)

let rechner = new rechner();
startApp()
function startApp(){
    output(calculator(getNum(),getNum(),getOp()));
}
function getNum(){
    return
}



function calculator(a,b,op)
{
	switch (op) {
		case "+":
			return add(a,b);
		case "-":
			return subtract(a,b);
		case "*":
			return multiply(a,b);
		case "/":
		case ":":
			return division(a,b);
			
			break;
	
		default:
			return ERROR_STR_GEN;
	}
}
function add(a,b)
{
	let c = a + b;
	return c;
}
function subtract(a,b) 
{
	return a - b;
}
function output(outputData){
    console.log(outputData);
}