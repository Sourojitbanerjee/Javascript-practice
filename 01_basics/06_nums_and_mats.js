 const score = 400
 console.log(score);


 const balance = new Number(100)

 console.log(balance);
 console.log(balance.toString());
 console.log(balance.toString().length);
 console.log(balance.toFixed(2));


 const number2 = 2390.79
 console.log(number2.toPrecision(4));


 const hundreds = 10000
// console.log(hundreds.toLocaleString('en-in'));
// console.log('souro')

// +++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.9));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,9,8,34,2));
console.log(Math.max(4,9,8,34,2));


console.log(Math.random());
console.log((Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
