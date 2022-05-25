//sum function
const sum = (a,b) => {
  return a + b
}
console.log(sum(14,9))

//conversion function
let oneEuroIs = {
  "JPY": 127.9, // japan yen
  "USD": 1.2, // us dollar
  "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
  return (valueInEuro * 1.2);  
}
console.log(fromEuroToDollar(3.5))

const fromDollarToYen = function(valueInDollar){
  return (valueInDollar / 1.2) * 127.9; 
}
console.log(fromDollarToYen(1));

const fromYenToPound = function(valueInYen){
  return (valueInYen / 127.9) * 0.8;
}
console.log(fromYenToPound(1));


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
