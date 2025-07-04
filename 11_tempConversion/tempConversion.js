const convertToCelsius = function(temp) {
  converted = (temp -32) /1
  console.log(converted)
  
};

const convertToFahrenheit = function(temp) {
  converted = temp * (9/5) + 32
  converted = converted.toFixed(1)
  console.log(converted)
};
let num = 0
let choice = window.prompt("Are you converting to F or C?")
choice = choice.toLowerCase()
if(choice == 'f'){
  num = window.prompt("Enter a temp:")
  convertToFahrenheit(num)
}
else if(choice == 'c'){
  num = window.prompt("Enter a temp:")
  convertToCelsius(num)
}

