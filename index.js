// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, 
    and 30 respectively. Create another value called name and give it the value of your own name.
*/
const principal = 200000;
const interestRate = 0.05;
const years = 30;
const name = "Jessica";


// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in 
    months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/

const monthlyInterestRate = interestRate/12;
const periods = years*12;



// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. 
    Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to 
create a variable called "numerator" to calculate the numerator, and another called "denominator" 
to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/

let numerator = monthlyInterestRate*Math.pow((1+monthlyInterestRate), periods);
let denominator = Math.pow((1+monthlyInterestRate), periods) - 1;
let monthlyRate = principal * (numerator/denominator);

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 
and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

function mortgageCalculator(){
    return name + ", your monthly rate is " + monthlyRate.toFixed(2);
}

// console.log(mortgageCalculator());

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute
 `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

function mortgageCalculator(principal, interest, years){
    const monthlyInterestRate = interest/12;
    const periods = years*12;
    const numerator = monthlyInterestRate*Math.pow((1+monthlyInterestRate), periods);
    const denominator = Math.pow((1+monthlyInterestRate), periods) - 1;
    let monthlyRate = principal * (numerator/denominator);
    return monthlyRate.toFixed(2);
}

// console.log(mortgageCalculator(200000, 0.05, 30));

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a 
number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, 
interest rate drops by 0.5%, if credit score is below 660, 
interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate
 doesn't change.
*/

function mortgageCalculator(principal, interest, years, creditScore){
    if(creditScore > 740){
        interest = interest - .05;
    }else if (creditScore < 660){
        interest = interest + .05;
    }
    let monthlyInterestRate = interest/12;
    let periods = years*12;
    let numerator = monthlyInterestRate*Math.pow((1+monthlyInterestRate), periods);
    let denominator = Math.pow((1+monthlyInterestRate), periods) - 1;
    let monthlyRate = principal * (numerator/denominator);

    if(Number.isNaN(monthlyRate)){
        return 0;
    }else {
        return monthlyRate.toFixed(2);
    }
    
}

// console.log(mortgageCalculator(200000, 0.5, 30, 800));
// console.log(mortgageCalculator(200000, 0.5, 30, 600));
// console.log(mortgageCalculator(200000, 0.5, 30, 700));



// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same 
as mortgageCalculator, except it should console.log the monthly payment for 10 different
 interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. 
 Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

function variableInterestRate(principal, interest, years){
    for(let i = 0; i < 9; i++){
        if(i === 0){
            interest = interest - .02;
        }else {
            interest = interest + 0.005;
        }
        let monthlyInterestRate = interest/12;
        let periods = years*12;
        let numerator = monthlyInterestRate*Math.pow((1+monthlyInterestRate), periods);
        let denominator = Math.pow((1+monthlyInterestRate), periods) - 1;
        let monthlyRate = principal * (numerator/denominator);
        if(Number.isNaN(monthlyRate)){
            console.log(name + ", with an interest rate of " + interest.toFixed(2) + ", your monthly rate is $0"); 
        }else {
            console.log(name + ", with an interest rate of " + interest.toFixed(2) + ", your monthly rate is $" + monthlyRate.toFixed(0));
        }
    }
    
}

// console.log(variableInterestRate(200000, 0.04, 30));

// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates 
(make sure to copy and paste as to not lose your work!) */
function variableInterestRate(principal, interestArray, years){
    for(let i = 0; i < interestArray.length; i++){
        interest = interestArray[i];
        let monthlyInterestRate = interest/12;
        let periods = years*12;
        let numerator = monthlyInterestRate*Math.pow((1+monthlyInterestRate), periods);
        let denominator = Math.pow((1+monthlyInterestRate), periods) - 1;
        let monthlyRate = principal * (numerator/denominator);
        console.log(name + ", with an interest rate of " + interest.toFixed(2) + ", your monthly rate is $" + monthlyRate.toFixed(0));
    }
    
}

// arrayOfInterest = [0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.055, 0.06];
// variableInterestRate(200000, arrayOfInterest, 30);

/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */
//uncomment below for window.prompt function

let princi = window.prompt("Enter principal:");
let time = window.prompt("Enter number of years for mortgage:");
let int = window.prompt("Enter interest rate as %: ");
int = int/100;

console.log(mortgageCalculator(princi, int, time));



/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as 
parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` 
and returns the maximum loan that a person could afford */





