// console.log("Hi, Arpit")

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