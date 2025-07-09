const add = function(num1,num2) {
  num1 = Number(num1)
  num2 = Number(num2)
	let result = num1 + num2
  return result
};

const subtract = function(num1,num2) {
  let result = num1 - num2
  return result
};

const sum = function(num) {
  let result = 0
  for(let j = 0; j<num.length; j++){
    result = result + num[j]
  }
  console.log(result)
  return result
};

const multiply = function(num) {
   let result = 1
    for(let i = 0 ; i < num.length; i++){
        result *= num[i]
    }
    return result
};

const power = function(num1,num2) {
	num1 = Number(num1)
  num2 = Number(num2)
	let result = num1 ** num2
  return result
};

const factorial = function(num) {
  let result = num
  if(num > 0){
  for(let i = 1; i < num; i++){
    result *= i
  }
}
 else if(num == 0){
  result = 1
 }
  return result

};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
