// addition
/**
let i = 1,
  sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log(sum);
 */

// multiplication
/**
let i = 1;
 let sum = 1;
  while (i <= 5) {
    sum = sum * i;
    i++;
  }
  console.log(sum);
 */

/**
// for loop 
for (let i = 0; i <10 ; i++) {
    console.log("shanto",i);
}
 */
/** 
// array
const num =[10, 50, 100,33];
for (i=0; i < num.length; i++) {
    console.log(num[i]);
}
*/
/**
even number sum/ odd number sum 
const num = [23, 43, 2, 5, 346, 203, 2];
let sumofOdd = 0;
let sumofEven = 0;

for (let i = 0; i < num.length; i++) {
  const x = num[i];
//        initialization kora hoisa  
  if (x % 2 == 1) {
    sumofOdd  += x;
  } else {
    sumofEven += x;
  }
}
console.log(sumofEven);
console.log(sumofOdd);
 */

/**
// for of loop 
const num = [23, 43, 2, 5, 346, 203, 2];
for (let item of num) {
    console.log(item);
}
 */
/**
let i = 1;
// code e dhokbo na for condition
while (i > 10) {
  console.log(i);
  i++;
}
 */
/**
// break / continue 
const num = [23, 43, 2, 5, 346, 203, 2];
for (let mehedy of num){
  console.log(mehedy);
 if (mehedy === 5){
  break;
  
 }
}
 */
/**
const num = [23, 43, 2, 5, 346, 203, 2];
for (let mehedy of num)
{
  // odd number remove 
  if (mehedy % 2 === 0){
    continue;
  }
  console.log(mehedy);
}
 */


// string 
// includes
// to lower  case 
// to upper case


/**

// trim
const x = "hellow";
const y = " hello ";
 
if (x.trim() === y.trim()){
  console.log("they are same" );
}
else
console.log("they are different" );

 */

//  array methods 

const x = "my name is programming Hero";
const words = x.split(" ");
// console.log(words);
const y = words.join("/");
console.log(y);
