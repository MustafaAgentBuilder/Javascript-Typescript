// Create a simple Function in TypeScript syntax
function fullName() {
    let name = "Mustafa Mirza"; // Changed 'Name' to 'name' (convention)
    console.log(name);
}

fullName(); // This will log "Mustafa Mirza" to the console

// Function with parameters and argument
function profaction(hobby: string) { // Changed 'Profaction' to 'profaction' (convention)
    let skill = `My Hobby is ${hobby} creator :)`;
    return skill;
}

// To see the output of profaction, we need to log it
const result = profaction("AI Agent");
console.log(result); // This will log "My Hobby is AI

// Arrow Functions

let ageCalculator = (birthYear:number,firstName:string):void => {
    let age = 2025 - birthYear
    console.log(`my name is ${firstName} and my age is ${age}`)
}

ageCalculator(2004,"uzair")