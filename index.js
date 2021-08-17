// Write your solution in this file!
//A word of warning. In this lab, you will practice doing some bad things. 
var customerName = "bob";
const leastFavoriteCustomer = "Sonya";

//a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    }

//a function that when called, declares a variable called bestCustomer
//in global scope and assigns it to be 'not bob'
function setBestCustomer() {
    bestCustomer = "not bob"; //global variable
    
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    

}

//a function called changeLeastFavoriteCustomer() that attempts to change
//that constant 
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "mike";
  
}
