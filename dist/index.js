"use strict";
//string
let myName = "Steve";
let message = `Hello, ${myName}`;
myName.toLocaleUpperCase();
//number
let count = 10;
let price = 9.99;
let temperature = -15;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
//boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("Hello we are open");
}
if (!isCompleted) {
    console.log("job not complete");
}
let isAvailable = isOpen && !isCompleted;
//null
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("Yejin");
logout();
//any
let someValue;
someValue.toString();
someValue.false;
someValue.toFixed();
