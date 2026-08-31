// console.log("Hi, Arpit")
//Section 1 - Variables & Operators

console.log("Ques:1 - Calculations");

// Ques: 1
let num1 = 10;
let num2 = 2;

console.log(num1, "+", num2, "=", num1 + num2);
console.log(num1, "-", num2, "=", num1 - num2);
console.log(num1, "*", num2, "=", num1 * num2);
console.log(num1, "/", num2, "=", num1 / num2);
console.log(num1, "%", num2, "=", num1 % num2);


// Ques: 2 - Swapping
console.log("\nQues:2 - Swapping");

let a = 10;
let b = 20;
let c = 0;

console.log("Before Swapping");
console.log("a =", a, "\nb =", b);

c = a;
a = b;
b = c;

console.log("After Swapping");
console.log("a =", a, "\nb =", b);


// Ques: 3 - Calculate Marks
console.log("\nQues:3 - Calculate Marks");

let s1 = 70;
let s2 = 76;
let s3 = 80;

let totalMarks = s1 + s2 + s3;
let average = totalMarks / 3;
let percentage = (totalMarks / 300) * 100;

console.log("Sub1 =", s1);
console.log("Sub2 =", s2);
console.log("Sub3 =", s3);

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");


// Ques: 4 - Shopping Bill
console.log("\nQues:4 - Shopping Bill");

let productPrice = 1000;
let qnt = 2;

let totalBill = productPrice * qnt;
let discount = totalBill / 10;
let finalBill = totalBill - discount;

console.log("Original Bill:", totalBill);
console.log("Discounted Amount:", discount);
console.log("Final Bill:", finalBill);


// Ques: 5 - Area Calculator
console.log("\nQues:5 - Area Calculator");

let len = 10;
let bre = 20;

let area = len * bre;
let perimeter = 2 * (len + bre);

console.log("Area of Rectangle:", area);
console.log("Perimeter of Rectangle:", perimeter);


// Section 2 - Comparison & Logical Operators

// Ques: 6 - Even or Odd
console.log("\nQues:6 - Even or Odd");

let num = 9;

if (num % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}


// Ques: 7 - Positive, Negative or Zero
console.log("\nQues:7 - Positive, Negative or Zero");

let no = 10;

if (no < 0) {
    console.log("Negative");
} else if (no > 0) {
    console.log("Positive");
} else {
    console.log("Zero");
}


// Ques: 8 - Greater Number
console.log("\nQues:8 - Greater Number");

let no1 = 20;
let no2 = 30;

if (no1 > no2) {
    console.log(`${no1} is greater than ${no2}`);
} else if (no2 > no1) {
    console.log(`${no2} is greater than ${no1}`);
} else {
    console.log("Both numbers are equal");
}
// Ques: 9 -  Largest of Three Numbers
console.log("\nQues:9 - Largest of Three Numbers");

let a1 = 10;
let a2 = 9;
let a3 = 11;

if (a1 > a2 && a1 > a3) {
    console.log(`${a1} is greater than ${a2} and ${a3}`);
} if (a2 > a3) {
    console.log(`${a2} is greater than ${a1} and ${a3}`);
} else {
    console.log(`${a3} is greater than ${a1} and ${a2}`);
}
//Ques:10 - Voting Eligibility
console.log("\nQues:10 - Voting Eligibility");

let age = 18;

if (age >= 18) {
    console.log(`Eligible`);
} else {
    console.log(`Not Eligible`);
}
//Ques:11 - Driving Eligibility
console.log("\nQues:11 - Driving Eligibility");

hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log(`You can drive`);
} else {
    console.log(`You can't drive`);
}

//Ques:12 - Number Range
console.log("\nQues:12 - Number Range");

if (num1 >= 10 && num1 <= 100) {
    console.log(`${num1} is between 10 and 100`);
} else {
    console.log(`${num1} is not between 10 and 100`);
}

//Section 3 - if, else-if & Nested Conditions

//Ques:13 - Student Grade
console.log("\nQues:13 - Student Grade");

let Percentage = 98;

if (Percentage < 0 || Percentage > 100) {
    console.log("Please Enter Valod Percentage");
} else if (Percentage >= 90) {
    console.log("Grade: A");
} else if (Percentage >= 80 && Percentage <= 89) {
    console.log("Grade: B");
} else if (Percentage >= 70 && Percentage <= 79) {
    console.log("Grade: c");
} else if (Percentage >= 60 && Percentage <= 69) {
    console.log("Grade: D");
} else if (Percentage >= 40 && Percentage <= 59) {
    console.log("Grade: E");
} else if (Percentage < 40) {
    console.log("Grade: F");
}

//Ques:14 - Student Result
console.log("\nQues:14 - Student Result");

s1 = 71;
s2 = 40;
s3 = 59;

let tMarks = s1 + s2 + s3;
let avg = tMarks / 3;

if (s1 > 39 && s2 > 39 && s3 > 39) {
    console.log("Pass");
    console.log("Average Marks:", avg.toFixed(2));
    if (avg >= 75) {
        console.log("→ Distinction");
    } else if (avg >= 60) {
        console.log("→ First Division");
    } else if (avg >= 50) {
        console.log("→ Second Division");
    } else {
        console.log("→ Pass");
    }
} else {
    console.log("Fail");
}

//Ques: 15 - Electricity Bill
console.log("\nQues: 15 - Electricity Bill");

let unit = 250;
let firstSlab = 100;
let secondSlab = 1;
totalBill = 0;
let totalBill2 = 0;
let totalBill3 = 0;
let thirdSlab = unit - 200;



if (unit <= 100) {
    totalBill = unit * 5;
    console.log('Total Bill:', totalBill.toFixed(2));
} else if (unit > 100 && unit <= 200) {
    secondSlab = (unit - firstSlab);
    totalBill2 = (firstSlab * 5) + (secondSlab * 7);
    console.log("Total Bill:", totalBill2.toFixed(2));
} else {
    totalBill3 = (firstSlab * 5) + (100 * 7) + (thirdSlab * 10)
    console.log("Total Bill:", totalBill3.toFixed(2));
}

//Ques: 16 - Simple Login
console.log("\nQues:16 - Simple Login");

let username = "admin";
let password = "12345";

if (username == "admin" && password == "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid username or password");
}

//Ques: 17 - Salary Bonus
console.log("\nQues: 17 - Salary Bonus");

let oSal = 50000;
let exp = 10;
let bo1 = oSal + oSal * 0.20;
let bo2 = oSal + oSal * 0.10;
let bo3 = oSal + oSal * 0.05;
// let bo4 = oSal+oSal/10;

if (exp >= 10) {
    console.log(`Original Salary: ${oSal}\nBonus:20%\nFinal Salary:${bo1}`);
}
else if (exp >= 5) {
    console.log(`Original Salary: ${oSal}\nBonus:10%\nFinal Salary:${bo2}`);
}
else if (exp >= 2) {
    console.log(`Original Salary: ${oSal}\nBonus:5%\nFinal Salary:${bo3}`);
}
else {
    console.log(`Original Salary: ${oSal}\nBonus:0%\nFinal Salary:${oSal}`);
}

//Ques:18 -  Age Category
console.log("\nQues:18 -  Age Category");

age = 60;

if (age >= 0 && age <= 12) {
    console.log("Child");
}
if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
if (age >= 20 && age <= 59) {
    console.log("Adult");
}
else {
    console.log("Senior Citizen");
}
//Section 4 - switch-case
//Ques: 19 - Day of the Week
console.log("Ques: 19 - Day of the Week");

let day = 7;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

//Ques: 20 - Simple Calculator
console.log("\nQues: 20 - Simple Calculator");

let Operators = "+"
switch (Operators) {
    case "+":
        console.log(`${num1}+${num2}: `, num1 + num2);
        break;
    case "-":
        console.log(`${num1}-${num2}: `, num1 - num2);
        break;
    case "*":
        console.log(`${num1}*${num2}: `, num1 * num2);
        break;
    case "/":
        console.log(`${num1}/${num2}: `, num1 / num2);
        break;
    case "%":
        console.log(`${num1}%${num2}: `, num1 % num2);
        break;
    default:
        console.log("Enter Interzers Only.");

}

//Ques: 21 - Month Name
console.log("\nQues: 21 - Month Name");

let month = 5;

switch (month) {

    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid Month");
}

//Ques: 22 -  Menu-Based Calculator

console.log("\nQues: 22 - Menu-Based Calculator");

console.log("\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus\nEnter your choice: ");

let choice = 5
num1 = 20;
num2 = 30;

switch (choice) {

    case 1:
        console.log("Addition:", num1 + num2);
        break;

    case 2:
        console.log("Subtraction:", num1 - num2);
        break;

    case 3:
        console.log("Multiplication:", num1 * num2);
        break;

    case 4:
        console.log("Division:", num1 / num2);
        break;

    case 5:
        console.log("Modulus:", num1 % num2);
        break;

    default:
        console.log("Invalid Choice");
}

//Ques: 23 - Traffic Signal
console.log("Ques: 23 - Traffic Signal");

let light = "green";

switch (light) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid signal");

}

//Section 5 - Mixed Problems

