       //    Alert  //

alert("Welcome Ali to my website.");

alert("Welcome to JS Land... \nHappy Coding!");

alert("Hello... I can run JS through my web browser's console");



       //    Variables For Strings    //

       

var myName = "Israr Ali";
console.log("Showing value of variable 'myName': " + myName);

var message;
message = "Hello World";
alert(message);

var studentName = "Ali Khan";
var studentAge = "17 years old";
var institutionName = "SSUET";
var courseName = "Web / Mobile Application & Cloud Computing - Module A";

alert("Student Name: " + studentName);
alert("Student Age: " + studentAge);
alert("Student Institution: " + institutionName);
alert("Course Name: " + courseName);

var menu = "PIZZA";

alert(menu + "\n" + menu.substring (0,4) + "\n" + menu.substring (0,3)+ "\n" + menu.substring (0,2)+ "\n" + menu.substring (0,1) );

var jobTitle = "Software Developer";
var jobLocation = "USA";
var numOfChild = 2;
var partnerName = "Anglina";

alert("You will be a " + jobTitle + " in " + jobLocation +", and married to " + partnerName + " with " + numOfChild + " kids.");

var email = "abc@gmail.com";

alert("My email address is " + email);

var book = "A smarter way to learn JavaScript";

alert("I am trying to learn from the book " + "'" + book + "'");

alert("My name is " + studentName + ", I am " + studentAge + ", " + "I study in " + institutionName + ", I take " + courseName + " classes.");

document.write("<h1>Yay! I can write HTML content through Javascript.</h1>");


       //   Variables For Numbers  //

var age = 17;
alert("I am " + age + " years old");

var numberOfVists = 21;
alert("You have visited this site " + numberOfVists + " times");

var birthYear = 1990;
document.write("<hr/>");
document.write("<h1>Below text written through Javascript</h2>");
document.write("<h2>My birth year is " + birthYear + "</h2>");
document.write("<h2>Data type of my declared variable is " + typeof(birthYear) + "</h2>" );


var visitorName = "John Doe";
var productTitle = "T-Shirt(s)";
var quantity = 5;

document.write("<h3>" + visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store</h3>");

document.write("<hr/>");




//  Variable Names: Legal & Illegal //

var age = 22, fullName = "Israr Ali", institute = "SMIT";


// Legal variable names

var  fullName, age1,  $currency, numberOfStudents,_class;
console.log(age, fullName, _class, $currency, numberOfStudents);


// Illegal variable names

// var 1age, *fullName, &class, @currency, number!Of!Students;
// console.log(1age, *fullName, &class, @currency, number!Of!Students);



    //   MATH	EXPRESSIONS     //


// Exercise # 1
var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var result = num1  + num2;
alert("Sum of " + num1 + " and " + num2 + " is " + result);

// Exercise # 2
result = num1  - num2;
alert("Result of subtracting " + num1 + " from " + num2 + " is " + result);

result = num1  * num2;
alert("Result of multiplying " + num1 + " and " + num2 + " is " + result);

result = num1  / num2;
alert("Result of dividing " + num1 + " by " + num2 + " is " + result);

result = num1  % num2;
alert("Remainder of dividing " + num1 + " by " + num2 + " is " + result);

// Exercise # 3
var number;

document.write("<h3>Value after variable declaration is: " + number + "</h3>");

number = 3;

document.write("<h3>Initial value is: " + number + "</h3>");

number++;

document.write("<h3>Value after increment is: " + number + "</h3>");

number = number + 7;

document.write("<h3>Value after addition is: " + number + "</h3>");

number--;

document.write("<h3>Value after decrement is: " + number + "</h3>");

number = number % 3;

document.write("<h3>The remainder is: " + number + "</h3>");

// Exercise # 4
var movieTicketCost = 600;

document.write("<h3>Total cost to buy 5 tickets to a movie is " + movieTicketCost * 5  + " PKR</h3>");

// Exercise # 5

var userInput = prompt("please enter your table number");
for (var u = 1; u < 11; u++) {
    window.document.write("<h2>" + userInput + " x " + u + " = " + userInput * u + "</h2>")
}


// Exercise # 6

var tempratureCelcius = 12, tempratureFahrenheit = 68;

document.write("<h1>" + tempratureCelcius + "&#8451; is " + ((tempratureCelcius * 9/5) + 32) + "&#8457;</h1>");

document.write("<h1>" + tempratureFahrenheit + "&#8457; is " + ((tempratureFahrenheit -32) * 5/9) + "&#8451;</h1>");

// Exercise # 7

var item1Name = prompt("Please enter name of first item");
var item1Price = parseInt(prompt("Please enter price of first item"));
var item1OrderedQty = parseInt(prompt("Please enter quantity of first item"));

var item2Name = prompt("Please enter name of second item");
var item2Price = parseInt(prompt("Please enter price of second item"));
var item2OrderedQty = parseInt(prompt("Please enter quantity of second item"));

let shippingCharges = 150;

let totalCost = (( item1Price * item1OrderedQty) + ( item2Price * item2OrderedQty) ) + shippingCharges;

document.write("<h1>Shopping Cart</h1>\n\n");
document.write("<h2>Price of " + item1Name + " is " + item1Price + "</h2>\n");
document.write("<h2>Quantity of " + item1Name + " is " + item1OrderedQty + "</h2>\n");
document.write("<h2>Price of " + item2Name + " is " + item2Price + "</h2>\n");
document.write("<h2>Quantity of " + item2Name + " is " + item2OrderedQty + "</h2>\n\n");
document.write("<h2>Shipping Charges " + shippingCharges + "</h2>\n\n");
document.write("<h2>Total cost of your order is " + totalCost + " PKR</h2>\n");

// Exercise # 8

var totalMarks = parseInt(prompt("Please enter total marks"));
var obtainedMarks = parseInt(prompt("Please enter obtained marks"));

let percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>\n\n");
document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
document.write("<h2>Marks obtained : " + obtainedMarks + "</h2>\n");
document.write("<h2>Percentage : " + percentage.toFixed(2) + "%</h2>\n");



// Exercise # 9

document.write("<h1>Currency in PKR</h1>\n\n");
document.write("<h2>Total currency in PKR : " + ((10 * 104) + (25 * 28)) + "</h2>\n");


// Exercise # 10

var calcNumber = -2.6666666666666666666;

alert(((calcNumber + 5) * 10) / 2);

