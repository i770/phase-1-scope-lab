// Write your solution in this file!
// Step 1: Declare global variable
var customerName = 'bob';

// Step 2: Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Step 3: Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';  // This creates a global variable
}

// Step 4: Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Step 5: Declare constant and attempt to change it
const leastFavoriteCustomer = 'initial customer';

function changeLeastFavoriteCustomer() {
  
    leastFavoriteCustomer = 'new customer';
  
  
  }

