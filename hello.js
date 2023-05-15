// Javascript 
// alert("JS Running...")
console.log("Hello Blard!");

// Variable
// Variables are names we used to store data in computer programs.
// Variable declarators var, let, and const.
var fname = "Blard";
let gravity = 9.8;

console.log(fname);
console.log(gravity);

// class activity 1
// const firstName = "John";
// let middleName = "Doe";
// const lastName = "Wishere";
// var age = 45;
// console.log(firstName);
// console.log(middleName);
// console.log(lastName);
// console.log(age);
// var can be re-declared and reassigned
// var age = 20;
//     age = 67

// let can not be re-declared but can be reassigned
// let middleName = "Omu"
    // middleName = "Omu";

// const can not be re-declared or reassigned
// const firstName "David"
    // firstName = "David";

// console.log(firstName, middleName, lastName, age);
// NB: Variable names can only start with letters, dollar sign, underscore.
// let @guy = "badVariableName";


// Data Types in JS
/* 
-Strings
-Numbers
-Boolean
-Null
-Undefined
-Objects
-Arrays
-BigInt
 */

// String 
// strings are text/data stored in either single or double quotes
const singleQuoteString = 'Hello, this is a string in single quotes';
console.log(singleQuoteString);
const doubleQuoteString = "Hello, this is a string in double quotes";
console.log(doubleQuoteString);

// Task 2
// I'm a fullstack developer at techstudio academy
let task2 = 'I\'m a fullstack developer at techstudio academy';
console.log(task2);

// Numbers 
// Numbers represent integers and floats
const num1 = 3;
const num2 = 2.333
const num3 = 3 * 10**5 
const num4 = 3e5
const num5 = -273
const num6 = "x"/2
// console.log(num3 == num4, num3, num4);
console.log(num6); //NaN


// Boolean 
// Booleans return true or false
let isAuth = true; 
const isAdult = false;
if (isAuth) {
    console.log("user logged in");
}else{
    console.log("You're not logged in");
}

// NULL
let emptyCan = null;
console.log(typeof emptyCan); // object
console.log(emptyCan); // null
emptyCan = [2,5,7]
console.log(typeof emptyCan); // object
console.log(emptyCan); // [2,5,7]

// undefined
let undefinedCan = undefined;
console.log(undefinedCan); // undefine
let testUndefined 
console.log(testUndefined); // undefined
// console.log(Boolean(0 == false));
// console.log(Boolean(1 == true));

// checking data type
// console.log(typeof testUndefined);// undefine
// console.log(typeof age);// number
// console.log(typeof firstName);// string

// Object Data Type
// object is a data structure that stores data in key-value pairs
// object is created using {}
const bioData = {
    fname: "Okiki",
    lname: "Enny",
    age: 26,
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    address: {
        street: "Adeyanju",
        city: "Lagos"
    }
}
console.log(bioData.fname); //Okiki
console.log(bioData.skills[2]);// Javascript

// Arrays
// Array is a collection of items enclosed in a rectangular bracket.
const myArr = [1, 2, true, null, false, "string"]
console.log(myArr);


// Other data types- symbol, BigInt

// string and string methods
// concatination of strings
// string methods- length, indexOf, toUpperCase, toLowerCase, concat, split, slice, trim, replace, substring
// const myStr1 = "Javascript";
// const myStr2 = "Python";
// const myAgeStr = "23";
// const statement = "My name is " + fname + " " + lastName + " I am " + age + " years old, and I write " + myStr1 + " and " + myStr2;
// console.log(statement);
// template string
// const newStatement = `My name is ${fname} ${lastName}, I am ${age} years old, and I write ${myStr1} and ${myStr2}.`;
// console.log(newStatement);

// // length
// let lengthOfStr1 = myStr1.length;// 10
// console.log(lengthOfStr1);
// indexOf
// console.log(myStr1.indexOf('p')); // 8
// console.log(myStr1[8]);

// // toUpperCase()
// let upper = newStatement.toUpperCase();
// console.log(upper);

// // toLowerCase()
// let lower = newStatement.toLowerCase();
// console.log(lower);

// // concat
// let newStr = myStr1.concat(myStr2);
// console.log(newStr);

// // Assignment
// // Give example on split(), slice(), trim() and substring()

// // split
// console.log(newStatement.split(","));
// console.log(myStr1.split("t"));

// // slice  0,1,2,3,4,5,6,7,8,9,10 
// // slice(start,end)
// const slicedWord = myStr1.slice(-6, 8)
// console.log(slicedWord)

// // trim()
// const untrimmedWord = "     Untrimmed       "
// console.log(untrimmedWord, untrimmedWord.length); // 21
// // console.log(untrimmedWord);

// const trimmedWord = untrimmedWord.trim()
// console.log(trimmedWord, trimmedWord.length); // 9
// // console.log(trimmedWord);

// substring
// myStr.substring(start, end)
// console.log(myStr1.substring(0, 4)); //java

// //replace
// console.log(myStr1); //javascript
// const replString =  myStr1.replace("Javascript", "Django")
// console.log(replString); //Django
// console.log(myStr1); //javascript

// // Task 4
// // replace wishere in newstatement with your name using the replace()
// console.log(newStatement);
// console.log(newStatement.replace("Wishere", "Gerald"));// Wishere => Gerald
// console.log(newStatement);

// // Operators 
// // Arithmetic Operators +, -, *, **, /, %, ++, --
// // Assignment Operators = , +=, -=, *=, /=
// // logical Operators &&, ||, !
// // comparison Operators ==, ===, <, <=, >, >=, !=, !==

// // Arithmetic
// console.log(5**3 + 8 - 6 * 10**2 / 25);
// let x = 20
// console.log(x);
// let y = 10
// let z = -5
// let result = (x - y - z) % 5
// // if (x % 2 == 0){
// //     console.log("x is an even number");
// // }else{
// //     console.log("x is not an even number");
// // }
// // const num = [1, 2, 3, 4]
// // for (let i = num.length; i >= 0; i--){
// //     console.log(num[i] * 2);
// // }

// // Assignment operators
// // Assignment operators are used to assign values to variables
// let academy = "Techstudio.com";
// let oddNum = [1, 3, 5, 7, 9];
// console.log(result);
// // x = x + 5;
// x += 5;
// console.log(x);
// console.log(y);
// // y = y - z;
// y -= z;
// console.log(y);

// // Logicaal operators &&, ||, !
// const T = true
// const F = false
// console.log(isAuth);//true
// console.log(isAdult);//false
// console.log(T && T);//true
// console.log(T && F);//false
// console.log(F && T);//false
// console.log(F && F);//false
// console.log(T && !isAdult);//true
// console.log(isAuth && isAdult);//false
// console.log("////////////////");
// console.log(T || T);//true
// console.log(T || F);//true
// console.log(F || T);//true
// console.log(F || F);//false
// console.log(T || !isAdult);//true
// console.log(isAuth || isAdult);//true
// console.log(isAuth || isAdult && T );//true

// let pwd = "mypassword123#";
// if(pwd.length >11 && pwd.includes("#")){
//     console.log("strong password");
// }else{
//     console.log("Your password is not strong enough!");
// }

// // Comparison operators ==, ===, !==, !=, !==
// // == loose comparison: compares the values of the variables and not data types.
// // === strict comparison: compares the values of the variables and their data types.
// let Age = '23'
// let newAge = 23;
// console.log(Age == newAge);// true
// console.log(Age === newAge);// false
// console.log(Age === String(newAge));// true

// // Math methods: floor, ceil, max, min, random

// // Math.floor() returns only the whole number part of a decimal (Not rounding up/down)
// let unfloor = 9.6554;
// console.log(unfloor); // 9.6554
// let floorNum = Math.floor(unfloor);
// console.log(floorNum);// 9

// // Math.ceil() this round up to the nearest whole number regardless of the decimal parts
// let ceilNum = Math.ceil(unfloor);// 10
// console.log(ceilNum);

// // Math.round()
// let rounded = 3.56 // rounds up/down to nearest whole number
// console.log(Math.round(rounded));

// // Math.random()
// // Math.random() is used to generate random numbers between 0 and 9
// const myRandom = Math.random() *10000
// const OTP = Math.floor(myRandom) // 
// console.log(myRandom);
// console.log(OTP);
// let dice = Math.random() * 6
// let dice2 = Math.ceil(dice)
// console.log(dice);
// console.log(dice2); // 1, 2, 3, 4, 5, 6

// // Conditionals if, if-else, else-if-else, switch, ternary operator

// // if
// // if(condition){
// //     codes to execute
// // }

// if (!isAdult){
//     console.log("You can drive");
// }

// // if-else
// if (isAdult){
//     console.log("You can drive");
// }
// else{
//     console.log("Wait till you turn 18");
// }
// // Regex
// let pass = "examPle123#";
// if (isAuth && pass.length < 8){
//     console.log("Very weak password!");
// }else if (pass.length > 8 && pass.includes("P")){
//     console.log("Moderately strong password!");
// }else if (pass.includes("@") || pass.includes("#") && pass.length > 10){
//     console.log("Very strong password!");
// }
// // Task 5
// // Create a variables called acctBal, atmPin. Using simple conditional statements, write a code that logs the following:
// // a) if user is authenticated, and atnPin is correct, it should log the message "Transaction successful! Your account balance is ----"
// // b) if user is not authenticated or incorrect atmPin, it should log the message "Transaction declined"
// // Solution
// const userName = "user"
// const acctBal = "$1000";
// const atmPin = "123#"
// if (userName === "user" && atmPin === "123#"){
//     console.log(`Transaction successfully! Account: ${acctBal}`);
// }else{
//     console.log("Transaction failed!");
// }

// Switch statement 
const caseValue = null;
switch (caseValue){
    case 1:
        // run this code 1
        break
    case 2:
        // run this code 2
        break
    case 3:
        // run this code 3
        break
    default:
        // run default code
}

// Example
// let userInput = prompt('What day is today?')
// let day = userInput.toLowerCase()
// console.log(userInput, day);
// switch (day) {
//     case 'sunday':
//         console.log(`Today is ${day}`);
//         break
//     case 'monday':
//         console.log(`Today is ${day}`);
//         break
//     case 'tuesday':
//         console.log(`Today is ${day}`);
//         break
//     case 'wednesday':
//         console.log(`Today is ${day}`);
//         break
//     case 'thursday':
//         console.log(`Today is ${day}`);
//         break
//     case 'friday':
//         console.log(`Today is ${day}`);
//         break
//     case 'saturday':
//         console.log(`Today is ${day}`);
//         break
//     default:
//         console.log("Invalid entry");
// }
// @BLARD_CODES

// Task 6
// Using switch create a banking system that authenticate user, deposits, withdraws and checkbalance.

// let ourInput = prompt("Enter PIN or username")
// let loginPin = ourInput.toLowerCase();
// console.log(ourInput, loginPin);
// let accName = "Blard"
// let deposit = "deposit";
// let withdraw = "withdraw";
// let checkbalance = "balance";
// let myAcctBal = 1000;
// if(loginPin == 1234 || loginPin == "admin"){
//        let action = prompt("What would you like to do?").toLowerCase();
//        switch(action) {
//             case "deposit":
//                 // console.log("Deposit");
//                 let depAmt = Number(prompt("Enter amount to deposit"))
//                 // myAcctBal = myAcctBal + depAmt;
//                 myAcctBal += depAmt;
//                 console.log(`Your new account balance is:  $${myAcctBal}`);
//                 break
//             case "withdraw":
//             // console.log("Withdraw");
//                 let withdrwAmt = Number(prompt("Enter amount to withdraw"))
//                 myAcctBal -= withdrwAmt
//                 console.log(`You withrew: $${withdrwAmt}\nYour new account balance is: $${myAcctBal}`);
//                 break
//             case "balance":
//             console.log("Checkbalance");
//                     console.log(`Your account balance is: $${myAcctBal}`);
//                 break
//             default:
//                 console.log("something went wrong");
//        }  
// }else{
//     console.log("Wrong PIN or Username");
// }

// Ternary Operator
// syntax:
// condition ? run_this_code_1 : run_this_code_2

// Using Ternary Operator
// !isAuth ? console.log("You are authorized") : console.log("You are not authorized");
// let action = prompt("What would you like to do?").toLowerCase();

// (loginPin == 1234 || loginPin == "admin") ? console.log("You're logged in") : console.log("Login Failed");


// Arrays
const myNewArr = [
    3,
     true,
      "apple",
       null,
        undefined,
         {key1: "value1", key2: "value2"},
          [1, 2, 3],
           "Okiki"
        ]

// Accessing array items
console.log(myNewArr[3]); //null
const firstItem = myNewArr[0] //3
const indexOflastItem = myNewArr.length - 1 // 
console.log(myNewArr[indexOflastItem]);

// modifying Arrays
console.log(myNewArr);
myNewArr[4] = "defined"
console.log(myNewArr);

// unshift() or push() for adding one item at beginning and at end r.p.t
myNewArr.unshift("newItem")
console.log(myNewArr);
myNewArr.push("lastItem")
console.log(myNewArr);

// shift and pop
myNewArr.shift();
console.log(myNewArr);
myNewArr.pop();
console.log(myNewArr);

// splice()
// Arr.splice(startIndex, delNumItems, addNumItems)
const splicedArr = myNewArr.splice(0, 3)
console.log(splicedArr); //returns deleted items
console.log(myNewArr);
myNewArr.splice(0, 0, "banana", 10, "Orange")
console.log(myNewArr);

// more example
let arr = ["Blard", "is", "a", "programmer"];
console.log(arr); //["Blard", "is", "a", "programmer"]

arr.splice(1, 2);
console.log(arr); //["Blard", "programmer"]

let Arr = ["I", "am", "eating", "right", "now"];
Arr.splice(2, 1, "learning", "javascript", "and", "react");
console.log(Arr);

Arr.splice(3, 0, "advance");
console.log(Arr);

// Task
// From index 3 of myNewArr, delete 2 items and add 2 items
// Solution
console.log(myNewArr);
console.log(myNewArr.splice(3, 2, "advance", "modern"));
console.log(myNewArr);

// slice(start, end)
let slicedArr = myNewArr.slice(3, 7)
console.log(slicedArr);

// join()
const numbers = [1, 2, 3, 4, 5]
console.log(numbers);
console.log(numbers.join());
console.log(numbers.join("-"));

// reverse()
console.log(numbers.reverse());

// sort()
let mNum = [20, 40, 5, 30, 15, 98, 70, 2]
let alph = ["Zebra", "Orange", "Apple", "Banana"]
console.log(alph.sort());

// Mon 8th May 2023
// Loops for, while, for-of, do-while
console.log("This looping ....");
console.log("This looping ....");
console.log("This looping ....");
console.log("This looping ....");
console.log("This looping ....");
console.log("This looping ....");
console.log("This looping ....");

// for
// for(condition){
//     run this code
// }

// for(initializer, condition, increment/decrement){
//     block of code
// }
for(let i = 1; i <= 12; i++){
    // if(i == 5){
    //     continue
    //     break
    // }
    console.log(`${i} X ${12} = ${i * 12}`);
} 

console.log("//////////While loop////////");
// while
let n;
while(n <= 12){
    console.log(`${n} X ${12} = ${n * 12}`);
    n++;
}
console.log(n); // 13
// do-while
let k = 1;
do{
    console.log(`${k} X ${12} = ${k * 12}`);
    k++;
}while(k <= 12);

// for-of
for (const element of arr) {
    // code goes here
  }


// Class Activity
let marks = [1, 5, 3, 2, 7, 4, 6, 8, 10,9]
const evenNum = []
for(let i = 0; i < marks.length; i++){
    if(marks[i] % 2 == 0){
        evenNum.push(marks[i]);
    }
}
console.log(evenNum);

// using while loop
console.log(marks[9]); // 9
let newMarks = [];
let markLength = marks.length;
while(markLength != 0){
    if(marks[markLength] % 2 == 0){
        newMarks.push(marks[markLength])
    }
    markLength --;       
}
console.log(newMarks);

// using for-of
console.log("/////////for-of////////");
for (const num of marks) {
    console.log(num)
  }

// using filter()
  let filtered = marks.filter((even) => even % 2 ==0)
  console.log(filtered); // 2, 4, 6, 8, 10


  
//   Functions 
// Fn is a block of code written to perform a specific task
// Naming function
// getName()
// updatePost()
// createUser()
// handleLogin()
// fetchData()
// myFunction2() //wrong naming

// creating functions
// Function declaration
// Function expression
// Arrow function
// Anonymous function

// function declaration
// function sampleFunction(){
//     write some code here
// }
// Hoisting
sampleFunction()
function sampleFunction(){
    console.log("This is function declaration...");
}

// calling of function
// sampleFunction();
// sampleFunction();
// sampleFunction();
// sampleFunction();
// sampleFunction();


// Function expression
// const sampleFunction = function (){
//      write some code here
// }

// sampleFunction2() // function can not be hoisted
const sampleFunction2 = function(){
    console.log("This is function expression...");
}
sampleFunction2();
sampleFunction2();
sampleFunction2();

// Arrow function
// let myFunction = ()=>{
//     // write some code here
// }
// myArrowFunction()
let myArrowFunction = ()=>{
    console.log("This is arrow function ...")
}
myArrowFunction()
myArrowFunction()
myArrowFunction()

// Function parameters and arguments
function greetingFunction (fname="Stranger", lname="Alien"){
    console.log(`Hello ${fname} ${lname}`);
}
greetingFunction("Blard", "Okiki")

const addNum = (a, b)=>{
    return a + b;
}
console.log(addNum(2, 6));
console.log(addNum(67, 6));
console.log(addNum(2, 43));

console.log("////////////");
function addNum2 (...args) {
    let sum = 0
    for (let i = 0; i < args.length; i++){
        sum += args[i];
    }
    console.log(sum);
}
addNum2(1, 3, 5, 6,6)


// Task 7
const countries = ["Zimbabwe", "Togo", "Ghana", "Sudan", "Uk", "Spain"]
const fruits = ["Guava", "Lime", "Apple", "Pawpaw", "Banana"]
const myString = "Techstudio"

const [first, second, ...rest] = countries

// creating the function
const changeToUpperSort = (arr) => {
  let newCountry = []
  for (const element of arr) {
    newCountry.push(element.toUpperCase())
  }
  // console.log(newCountry.sort());
  newCountry = newCountry.sort()
  console.log(newCountry);
}
// Involking the function
changeToUpperSort(countries)
changeToUpperSort(fruits)
changeToUpperSort(myString)

// 9th May 2023
// Objects 
// Object is a collection of properties in key-value pairs.
// creating an object
const myObj = {}; // empty object
const rectangle = {
    length: 20,
    width: 10,
    area: function (){
        return `Area is: ${this.length * this.width}cm^2`;
    }
}
console.log(rectangle);
console.log(rectangle.length); // 20
console.log(rectangle.width); // 10
console.log(rectangle.area()); // 200cm^2

// Task
// firstName, lastName, age, country, skills, isMarried, getDetail, 

// const person = {
//     firstName: 'Blard',
//     lastName: 'Dev',
//     age: '23',
//     country: 'United States',
//     skills: ['html', 'css', 'js', 'react', 'node', 'python'],
//     isMarried: false,
//     status: this.isMarried ? "I am married" : "I am single",
//     getDetails: function(){
//         return `Hi, my name is ${this.firstName} ${this.lastName}\nI live in ${this.country}, I am ${this.age} years old\nI have very good knowledge of ${this.skills}.\n${this.status}`
//     }
// }
import { companies, person, foodList } from "./module.js";
console.log(companies);
console.log(person);
console.log(foodList);

console.log(person.getDetails());
// creating new property
person.education = ["Bsc", "Msc", "PhD"]
console.log(person);
// Adding to an existing property
person.skills.push('Saas')
console.log(person.skills[person.skills.length - 1]); //Saas 

// Destructuring object
const { age, country, skills, isMarried, firstName, lastName} = person
console.log(`My name ${firstName} ${lastName}`);
// console.log(others);

// combining objects using spread operator
const newObj = {
    experience: 10,
    canDrive: true,
    drink:false
}
const ObjAdd = {...newObj, ...person}
console.log(ObjAdd);

// object methods assign(), keys(), values(), entries(),
// Object.assign() is used to copy an exist object
const copyPerson = Object.assign({}, person)
console.log(copyPerson);
copyPerson.hobby = "Gaming" // hobby is only added to 'copyPerson' object
const directCopy = person
console.log(directCopy);
directCopy.club = "Man City";


// Object.keys() is used to get all the keys in an object
const keys = Object.keys(copyPerson)
console.log(keys);

// Object.values() is used to get all the values in an object
const values = Object.values(copyPerson)
console.log(values);

// Object.entries() is used to get the array of  key-value pairs in an object
const entries = Object.entries(copyPerson)
console.log(entries);

for(const keys in person){
    if(keys == 'getDetails'){
        continue
    }
    console.log(`${keys}: ${person[keys]}`);
}

// import todoList from data.js
import {toDoList, anodaFile} from "./data.js"
console.log(toDoList);
console.log(anodaFile);


// Wednesday 10th May 2023
// Higher Order Array functions map, filter, find, forEach, reduce, some, every, sort

// map()
// const callbackFunction = (item)=>console.log(item.id, item.text)
// toDoList.map(callbackFunction)
const mappedList = toDoList.map(function(item){
    return `Item: ${item.id} is ${item.text}`
})
console.log(mappedList);


// To filter out completedTask
const completedTask = toDoList.filter((item)=>{
    return item.isDone
})
let mapHelper = completedTask.map((item)=>`${item.text} ${item.time}`)
console.log(mapHelper); // text, time in an array
mapHelper.forEach((item)=>console.log(item)); // each items separately 

// forEach
toDoList.forEach((item, index, arr)=>{
    // console.log(item.text, index, arr);
})

// find
const prices = [23, 100, 22, 25, 32, 22, 98, 10, -3]
const findPrice = prices.find((price)=> price > 25)
console.log(findPrice); //32

const students = ['Nathan', 'Eddy', 'Seun', 'Enny', 'Mubarak']
const longName = students.find((student)=> student.length > 6)
console.log(longName.toUpperCase());


// reducer
// arrName.reduce((acc, cur)=>{
// acc = acc + cur
// }, initialValue)
const addPrices = prices.reduce((acc, curr)=> acc + curr, 0)
console.log(addPrices);

// prices.reduce(function(acc, curr){
//     acc = acc + curr
// }, 0)

// Task 8
// Using the companies data from "./data.js", find the company or companies that have existed for more than 15 years. log to the console the company's name and years of existence.

// Task solution
console.log(companies); //Note that companies have been imported in line 735

//step 1
const filteredCompanies = companies.filter(company => {
    const yearsOfExistence = company.to - company.from;
    return yearsOfExistence < 10;
});
console.log(filteredCompanies);

//step 2
const answer = filteredCompanies.map(comp => {
    return `${comp.company} has existed for ${comp.to - comp.from}`
});
console.log(answer); //returns an array 

//step 3
answer.forEach(item => console.log(item)); //returns string representation

// // To filter company with same category
// let searchResult = prompt('Search category')
// const categorySearch = companies.filter((company)=>{
//     const category = company.category
//     return category == searchResult.toLowerCase()
// })
// // console.log(categorySearch);
// categorySearch.forEach(item => console.log(`Company name: ${item.company} Category: ${item.category.toUpperCase()}`))

// sort()
console.log(students);
const sortedStudents = students.sort()
console.log(sortedStudents);

// sorting array of numbers
console.log(prices);
prices.sort((a, b) =>{
    return a - b;
})
console.log(prices);

// let anodaFile = ["json", "anoda", "css", "django"]

let [first2, second2, ...rest2] = anodaFile
console.log(first2); //json
console.log(rest2); //css, django


// Friday 11th May 2023
// setTimeout(callback, timeOut)
console.log('/////////');

// console.log('Before setTimeOut');
// setTimeout(()=>{
//     console.log("SetTimeout is finally out!");
// }, 5000)
// console.log('After setTimeOut');

// setTimeInterval

// const myInterval = setInterval(function(){
//     alert('You have to login to continue')
// }, 5000);


// const stopInterval = ()=>{
//     clearInterval(myInterval);
// }

// stopInterval()

// Promises
// creating a promise
// syntax:
// const promise = new Promise((resolve, reject)=>{
//     resolve('promise fulfilled');
//     reject('promise rejected');
// })

const doPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const sports = ["Tennis", "Soccer", "Judo"]
        if(sports.length > 0){
            resolve(sports)
        }else{
            reject('Something went wrong')
        }
    }, 8000)
})
console.log("Outside promise");
doPromise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })

    // 
    const sqNum = async function(n){
         return n*n
    }

    const result2 = await sqNum(8);
    console.log(result2);


// Fetch API
// fetch using promises
// fetch using async await
// axios

// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => console.error(error))

// To get specified number of countries
  const url = 'https://restcountries.com/v2/all';
  const li = document.querySelector('#con')

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const numberOfItems = 10; // Specify the desired number of items
      
//       // Use slice() to extract only the specified number of items
//       const slicedData = data.slice(0, numberOfItems);
//       console.log(slicedData);
//       slicedData.forEach(item =>{
//         console.log(`${item.name}(${item.cioc}) Population: ${item.population}`)
//         li.innerHTML += `<li><strong>${item.name}</strong> (${item.cioc})  <strong>Population:</strong> ${item.population}</li>`
//     });
//     })
//     .catch(error => console.error(error));

// Using async await
async function getFirstTen(start, end) {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const firstTen = data.slice(start, end)
    console.log(firstTen);
}

getFirstTen(0, 10) // page 1
getFirstTen(10, 20) // page 2


// 
const url1 = 'https://open-weather13.p.rapidapi.com/city/landon';
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '11286476camsh21a72f9ea6e55bep1d8d3djsnab0b968b2894',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url1, options1);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}



const url2 = 'https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '11286476camsh21a72f9ea6e55bep1d8d3djsnab0b968b2894',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url2, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
