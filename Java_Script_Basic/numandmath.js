// ************ Number ***************
const score = 400
console.log(score)

const balence = new Number(100)
console.log(balence);

console.log(balence.toString().length);
console.log(balence.toFixed(2));

const otherNumber=23.8966
const otherNumber2=123.8966
const otherNumber3=1123.8966
console.log(otherNumber.toPrecision(3))
console.log(otherNumber2.toPrecision(3))
console.log(otherNumber3.toPrecision(3))



const hundreds= 100000000
console.log(hundreds.toLocaleString()) //USA
console.log(hundreds.toLocaleString('en-IN')) //India



//************ Math ***************** */
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(4.2));
console.log(Math.min(4, 5,6,1,12));
console.log(Math.max(4, 5,6,1,12));
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

