// Problem: 
let age: number = 25;
age  = age < 30 ? console.log("You are young!") : console.log("You are old!");

// if (age<30){
//     console.log("You are young!");
// }else {
//     console.log("You are old!");
// }

// Solution:
let age: number = 25;
// Use a different variable name
let message = age < 30 ? "You are young!" : "You are old!";
console.log(message)