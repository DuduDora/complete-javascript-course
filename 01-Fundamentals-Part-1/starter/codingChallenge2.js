/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 
*/

let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = (bmiMark > bmiJohn);


console.log(bmiMark); // 27.309968138370508
console.log(bmiJohn);// 24.194608809993426

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${(Math.round(bmiMark))} is higher than John's ${Math.round((bmiJohn))}!`)
} else {
    console.log(`John's BMI ${Math.round((bmiJohn))} is higher than Mark's ${Math.round((bmiMark))}!`)
}


massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;
bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark);
console.log(bmiJohn);

markHigherBMI = (bmiMark > bmiJohn);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${(Math.round(bmiMark))} is higher than John's ${Math.round((bmiJohn))}!`)
} else {
    console.log(`John's BMI ${Math.round((bmiJohn))} is higher than Mark's ${Math.round((bmiMark))}!`)
}
