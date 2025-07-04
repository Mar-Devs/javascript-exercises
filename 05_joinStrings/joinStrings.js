/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
let firstName = "Marah";
let lastName = "Hasan";
let thisYear = 2025;
let birthYear = 2003;
let greeting = `Hello ${firstName} ${lastName} ! You are ${thisYear-birthYear} years old.`
console.log(greeting)





// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}

// ## Step 2: Do
// After understanding the example code, you will recreate the snippet on your own using the following instructions (in `joinStrings.js`):

// 1. Create 4 variables: `firstName`, `lastName`, `thisYear`, and `birthYear`

// 2. Create a 5th variable, `greeting`, that is constructed from the previous 4 variables
// - It should contain a greeting that includes the person's full name and age