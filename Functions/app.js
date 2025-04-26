"use strict";
// Create a simple Function in TypeScript syntax
function fullName() {
    let name = "Mustafa Mirza"; // Changed 'Name' to 'name' (convention)
    console.log(name);
}
fullName(); // This will log "Mustafa Mirza" to the console
// Function with parameters and argument
function main(hobby) {
    let skill = `My Hobby is ${hobby} creator :)`;
    return skill;
}
// To see the output of profaction, we need to log it
const result = main("AI Agent");
console.log(result); // This will log "My Hobby is AI Agent creator :)"
